/// <reference path="../node_modules/@types/es6-promise/index.d.ts" />

import fs = require('fs');
import path = require('path');

import { readArrayBuffer, readText } from './lib';

const WebReplPassword = '';

const RT_PutFile = 1;
const RT_GetFile = 2;
const RT_GetVer = 3;

type RequestType = typeof RT_PutFile | typeof RT_GetFile | typeof RT_GetVer;

const BM_None = 0;
const BM_FirstResponseForPut = 11;
const BM_FinalResponseForPut = 12;
const BM_FirstResponseForGet = 21;
const BM_FileData = 22;
const BM_FinalResponseForGet = 23;
const BM_ResponseForGetVer = 31;

type BinaryModes = typeof BM_None | typeof BM_FirstResponseForPut | typeof BM_FinalResponseForPut | typeof BM_FirstResponseForGet | typeof BM_FileData | typeof BM_FinalResponseForGet | typeof BM_ResponseForGetVer;

export type SocketStatus = 'connecting' | 'connected' | 'reconnecting' | 'reconnected' | 'disconnected';

interface Events {
  statusChange: (status: SocketStatus) => void;
  data: (data: string) => void;
  line: (line: string) => void;
}

export interface MpFile {
  filename: string;
  isdir: boolean;
}

interface MicropythonWs {
  connect(url: string): Promise<void>;
  sendData(data: string): void;
  runCode(code: string): void;

  getVer(): void;
  sendFile(f: File): void;
  getFile(src_fname: string): Promise<Blob>;

  sendFileAsText(file: string, text: string): Promise<void>;
  getFileAsText(src_fname: string): Promise<string>;

  scanNetworks(): Promise<string[]>;
  listFiles(cwd: string): Promise<MpFile[]>;

  on<K extends keyof Events>(eventType: K, handler: Events[K]): void;
}

const stub = () => void 0;

function getSample(filePath: string) {
  const fileName = filePath.slice(9);

  // These have to as if statement due to BRFS parsing the AST at compile time

  if (fileName === 'doubler.xml') {
    return fs.readFileSync(path.join(__dirname, 'resources', 'samples', 'doubler.xml'), 'utf-8');
  }

  if (fileName === 'led_strip.xml') {
    return fs.readFileSync(path.join(__dirname, 'resources', 'samples', 'led_strip.xml'), 'utf-8');
  }

  if (fileName === 'pin_reader.xml') {
    return fs.readFileSync(path.join(__dirname, 'resources', 'samples', 'pin_reader.xml'), 'utf-8');
  }

  return '';
}

function listSamples() {
  const samples = fs.readdirSync(path.join(__dirname, 'resources', 'samples'));

  return samples.map((sample) => ({ filename: sample, isdir: false }));
}

export function dummyWs(): MicropythonWs {
  const eventHandlers: Events = {
    statusChange: stub,
    data: stub,
    line: stub,
  };

  function on<K extends keyof Events>(eventType: K, handler: Events[K]) {
    eventHandlers[eventType] = handler;
  }

  return {
    async connect(_url) {
      await sleep(1000);

      eventHandlers.statusChange('connected');
    },

    sendData(data: string) { },

    runCode(_code) { },

    getVer() { },

    async sendFile(_f) { },
    async getFile(_src_fname) { return new Blob([]); },

    async sendFileAsText(_file, _text) {
      console.log('sendFileAsText', _file, _text);
    },

    async getFileAsText(filePath) {
      console.log('getFileAsText', filePath);

      if (filePath.length === 0 || filePath[0] !== '/') {
        throw new Error('Path must be absolute');
      }

      if (filePath.slice(0, 9) === '/samples/') {
        return getSample(filePath);
      }

      if (filePath === '/dummy1.xml') {
        return fs.readFileSync(path.join(__dirname, 'resources', 'samples', 'doubler.xml'), 'utf-8');
      }

      return '';
    },

    async scanNetworks() { return []; },

    async listFiles(cwd) {
      console.log('listFiles', cwd);

      if (cwd.length === 0 || cwd[0] !== '/') {
        throw new Error('Path must be absolute');
      }

      if (cwd === '/') {
        return [
          { filename: 'user', isdir: true },
          { filename: 'samples', isdir: true },
          { filename: 'dummy1.xml', isdir: false },
        ];
      }

      if (cwd === '/samples') {
        return listSamples();
      }

      if (cwd === '/user') {
        return [
          { filename: 'user1.xml', isdir: false },
          { filename: 'user2.xml', isdir: false },
          { filename: 'user3.xml', isdir: false },
          { filename: 'user4.xml', isdir: false },
        ];
      }

      throw new Error('Invalid folder');
    },

    on,
  };
}

export function micropythonWs(): MicropythonWs {
  let ws: WebSocket | null = null;
  let connectionWatch: NodeJS.Timer | null = null;
  let receiveBuffer = '';

  let binaryState: BinaryModes = BM_None;

  let putFileName: string | null = null;
  let putFileData: Uint8Array | null = null;
  let getFileName: string | null = null;
  let getFileData: Uint8Array | null = null;

  // Oneshot handlers called in WS receive
  // let putFileHandler: (() => void) | null = null;
  // let getFileHandler: ((blob: Blob) => void) | null = null;

  let fileHandler: ((err: Error | null, blob?: Blob) => void) | null;

  let jsonHandler: ((json: object | any[]) => void) | null = null;

  const eventHandlers: Events = {
    statusChange: stub,
    data: stub,
    line: stub,
  };

  function on<K extends keyof Events>(eventType: K, handler: Events[K]) {
    eventHandlers[eventType] = handler;
  }

  let url: string | null = null;
  let connectResolver: (() => void) | null = null;
  let status: SocketStatus = 'disconnected';

  function statusChange(s: SocketStatus) {
    status = s;

    eventHandlers.statusChange(s);
  }

  function connect(u: string): Promise<void> {
    return new Promise<void>((resolve) => {
      url = u;
      connectResolver = resolve;

      _connect(false);
    });
  }

  function _connect(reconnect: boolean) {
    if (!url) {
      throw new Error('Invalid URL');
    }

    if (reconnect) {
      statusChange('reconnecting');
    } else {
      statusChange('connecting');
    }

    receiveBuffer = '';
    fileHandler = null;

    ws = new WebSocket(url);

    ws.binaryType = 'arraybuffer';

    ws.onmessage = onMessage;
    ws.onopen = onOpen;
    ws.onclose = onClose;
    ws.onerror = onError;

    connectionWatch = setTimeout(() => {
      if (ws && ws.readyState === WebSocket.CONNECTING) {
        ws.close();
        ws = null;

        connectionWatch = null;
      }
    }, 5000);
  }

  function attemptReconnect() {
    setTimeout(() => _connect(true), 1000);
  }

  function onOpen() {
    if (!ws) {
      throw new Error('Websocket not available');
    }

    // The default login password for the terminal
    ws.send(`${WebReplPassword}\r`);

    if (connectResolver) {
      connectResolver();

      connectResolver = null;

      statusChange('connected');
    } else {
      statusChange('reconnected');
    }
  }

  function onClose() {
    statusChange('disconnected');

    attemptReconnect();
  }

  function onError(evt: Event) {
    console.error('socket', evt);
  }

  function updateFileStatus(s: string) {
    console.log(s);
  }

  function onMessage(event: MessageEvent) {
    if (!ws) {
      throw new Error('Websocket not available');
    }

    if (event.data instanceof ArrayBuffer) {
      const data = new Uint8Array(event.data);

      switch (binaryState) {
        case BM_FirstResponseForPut:
          // first response for put
          if (decodeResponse(data) === 0) {
            if (!putFileData) { throw new Error('put_file_data is empty'); }

            // send file data in chunks
            for (let offset = 0; offset < putFileData.length; offset += 1024) {
              ws.send(putFileData.slice(offset, offset + 1024));
            }

            binaryState = BM_FinalResponseForPut;
          }

          break;

        case BM_FinalResponseForPut:
          // final response for put
          if (decodeResponse(data) === 0) {
            if (!putFileData) { throw new Error('put_file_data is empty'); }

            updateFileStatus(`Sent ${putFileName}, ${putFileData.length} bytes`);

            if (fileHandler) {
              fileHandler(null);

              fileHandler = null;
            }
          } else {
            updateFileStatus(`Failed sending ${putFileName}`);

            if (fileHandler) {
              fileHandler(new Error('Failed to put'));
            }

            fileHandler = null;
          }

          binaryState = BM_None;

          break;

        case BM_FirstResponseForGet:
          // first response for get
          if (decodeResponse(data) === 0) {
            binaryState = BM_FileData;
            const rec = new Uint8Array(1);
            rec[0] = 0;
            ws.send(rec);
          }

          break;

        case BM_FileData:
          // file data
          const sz = data[0] | data[1] << 8;

          if (data.length === 2 + sz) {
            // we assume that the data comes in single chunks
            if (sz === 0) {
              // end of file
              binaryState = BM_FinalResponseForGet;
            } else {
              if (!getFileData) { throw new Error('get_file_data is empty'); }

              // accumulate incoming data to get_file_data
              const new_buf = new Uint8Array(getFileData.length + sz);

              new_buf.set(getFileData);
              new_buf.set(data.slice(2), getFileData.length);

              getFileData = new_buf;

              updateFileStatus(`Getting ${getFileName}, ${getFileData.length} bytes`);

              const rec = new Uint8Array(1);
              rec[0] = 0;
              ws.send(rec);
            }
          } else {
            binaryState = BM_None;
          }

          break;

        case BM_FinalResponseForGet:
          // final response
          if (decodeResponse(data) === 0) {
            if (!getFileName) { throw new Error('get_file_name is empty'); }
            if (!getFileData) { throw new Error('get_file_data is empty'); }

            updateFileStatus(`Got ${getFileName}, ${getFileData.length} bytes`);

            if (fileHandler) {
              fileHandler(null, new Blob([getFileData], { type: 'application/octet-stream' }));

              fileHandler = null;
            }
          } else {
            updateFileStatus(`Failed getting ${getFileName}`);

            if (fileHandler) {
              fileHandler(new Error('Failed to get'));

              fileHandler = null;
            }
          }

          binaryState = BM_None;

          break;

        case BM_ResponseForGetVer:
          // first (and last) response for GET_VER
          console.log('GET_VER', data);
          binaryState = BM_None;

          break;
      }

      return;
    }

    const result: string = event.data;

    eventHandlers.data(result);

    // Data is send one character at a time
    receiveBuffer += result;

    // Only when we receive a new line character do we have a complete JSON message
    while (receiveBuffer.indexOf('\n') !== -1) {
      const [line, ...remaining] = receiveBuffer.split('\n');

      eventHandlers.line(line);

      receiveBuffer = remaining.join('\n');

      // Crude but effective...
      const isJson = line[0] === '[' || line[0] === '{';

      if (isJson && jsonHandler) {
        try {
          jsonHandler(JSON.parse(line));
        } catch (e) {
          console.error('Failed to parse JSON', line, e);
        }

        jsonHandler = null;
      }
    }
  }

  function send(data: string) {
    if (!ws) {
      throw new Error('Websocket not available');
    }

    data = `${data.replace(/\n/g, '\r')}`;

    try {
      ws.send(data);
    } catch (e) {
      if (e instanceof DOMException) {
        alert('I could not connect to the ESP8266. :-(');
      }

      console.error(e);
    }
  }

  async function runCode(code: string) {
    // Ctrl-C current program, enter paste mode, type program, leave paste mode
    send(`\r\x03\r\x05${code}\r\x04`);
  }

  // async function runLine(code: string) {
  //   send(`\r${code}\r`);
  // }

  function decodeResponse(data: Uint8Array) {
    if (data[0] === 'W'.charCodeAt(0) && data[1] === 'B'.charCodeAt(0)) {
      const code = data[2] | data[3] << 8;
      return code;
    } else {
      return -1;
    }
  }

  function getRequestRecord(rt: RequestType, fsize?: number, fname?: string) {
    // WEBREPL_FILE = "<2sBBQLH64s"
    const rec = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64);

    rec[0] = 'W'.charCodeAt(0);
    rec[1] = 'A'.charCodeAt(0);
    rec[2] = rt;
    rec[3] = 0;
    rec[4] = 0;
    rec[5] = 0;
    rec[6] = 0;
    rec[7] = 0;
    rec[8] = 0;
    rec[9] = 0;
    rec[10] = 0;
    rec[11] = 0;

    if (fsize) {
      rec[12] = fsize >> 0 & 0xff;
      rec[13] = fsize >> 8 & 0xff;
      rec[14] = fsize >> 16 & 0xff;
      rec[15] = fsize >> 24 & 0xff;
    }

    if (fname) {
      rec[16] = fname.length >> 0 & 0xff;
      rec[17] = fname.length >> 8 & 0xff;

      for (let i = 0; i < 64; ++i) {
        if (i < fname.length) {
          rec[18 + i] = fname.charCodeAt(i);
        } else {
          rec[18 + i] = 0;
        }
      }
    }

    return rec;
  }

  function putFile() {
    return new Promise<void>((resolve, reject) => {
      if (!ws) {
        throw new Error('Websocket not available');
      }

      if (fileHandler) {
        return reject(new Error('A file transfer is already in progress'));
      }

      fileHandler = (err) => {
        if (err) {
          return reject(err);
        }

        resolve();
      };

      if (!putFileName) { return reject(new Error('put_file_name is empty')); }
      if (!putFileData) { return reject(new Error('put_file_data is empty')); }

      const dest_fname = putFileName;
      const dest_fsize = putFileData.length;

      const rec = getRequestRecord(RT_PutFile, dest_fsize, dest_fname);

      // initiate put
      binaryState = BM_FirstResponseForPut;
      updateFileStatus(`Sending ${putFileName}...`);
      ws.send(rec);
    });
  }

  function getFile(filePath: string) {
    if (filePath.length === 0 || filePath[0] !== '/') {
      throw new Error('Path must be absolute');
    }

    return new Promise<Blob>((resolve, reject) => {
      if (!ws) {
        throw new Error('Websocket not available');
      }

      if (fileHandler) {
        return reject(new Error('A file transfer is already in progress'));
      }

      fileHandler = (err, blob) => {
        if (err) {
          return reject(err);
        }

        if (!blob) {
          throw new Error('No blob!');
        }

        resolve(blob);
      };

      // WEBREPL_FILE = "<2sBBQLH64s"
      const rec = getRequestRecord(RT_GetFile, undefined, filePath);

      // initiate get
      binaryState = BM_FirstResponseForGet;
      getFileName = filePath;
      getFileData = new Uint8Array(0);
      updateFileStatus(`Getting ${getFileName}...`);

      return ws.send(rec);
    });
  }

  async function getFileAsText(filePath: string) {
    if (filePath.slice(0, 9) === '/samples/') {
      return getSample(filePath);
    }

    const blob = await getFile(filePath);

    return readText(blob);
  }

  function getVer() {
    if (!ws) {
      throw new Error('Websocket not available');
    }

    const rec = getRequestRecord(RT_GetVer);

    // initiate GET_VER
    binaryState = BM_ResponseForGetVer;
    ws.send(rec);
  }

  async function sendFile(f: File) {
    putFileName = f.name;

    putFileData = new Uint8Array(await readArrayBuffer(f));

    console.log(`${encodeURI(f.name)} - ${putFileData.length} bytes`);

    await putFile();
  }

  async function sendFileAsText(file: string, text: string) {
    putFileName = file;

    const blob = new Blob([text], { type: 'text/plain' });

    putFileData = new Uint8Array(await readArrayBuffer(blob));

    await putFile();
  }

  function scanNetworks(): Promise<string[]> {
    return new Promise<string[]>((resolve) => {
      const python = `
import network
import json
sta_if = network.WLAN(network.STA_IF); sta_if.active(True)
networks = sta_if.scan()
network_names = [network[0] for network in networks]
print(json.dumps(network_names))
`;

      jsonHandler = (json) => Array.isArray(json) ? resolve(json) : [];

      runCode(python);
    });
  }

  function listFiles(cwd: string): Promise<MpFile[]> {
    if (cwd.length === 0 || cwd[0] !== '/') {
      throw new Error('Path must be absolute');
    }

    if (cwd === '/samples') {
      return Promise.resolve(listSamples());
    }

    return new Promise<MpFile[]>((resolve) => {
      const python = `
import json
from lib import fs
print(json.dumps(fs.listdir('${cwd}')))
`;

      jsonHandler = (json) => Array.isArray(json) ? resolve(json) : [];

      runCode(python);
    });
  }

  return {
    connect,
    runCode,
    // runLine,
    sendData: send,
    getVer,
    sendFile,
    sendFileAsText,
    getFile,
    getFileAsText,
    scanNetworks,
    listFiles,
    on,
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
