import { dummyWs, micropythonWs, SocketStatus } from './micropython-ws';
import { App, EduBlocksXML, PythonScript, DocumentState } from './types';
import { joinDirNameAndFileName, getBaseName } from './lib';

export async function newApp(): Promise<App> {
  const host = getHost();

  const ws = host ? micropythonWs() : dummyWs();

  ws.connect(`ws://${host}`);

  return {
    assignTerminal(terminal) {
      ws.on('data', (data: string) => terminal.write(data));

      terminal.onData(ws.sendData);
    },

    async save(doc) {
      const filePath = joinDirNameAndFileName(doc.dirName, doc.fileName);
      let pyFilePath;

      if (!filePath) {
        throw new Error('Invalid file path');
      }

      if (doc.fileType === EduBlocksXML) {
        if (!doc.xml) {
          throw new Error('Nothing to save');
        }

        await ws.sendFileAsText(filePath, doc.xml);

        pyFilePath = filePath.replace('.xml', '.py');
      } else {
        pyFilePath = filePath;
      }

      if (!doc.python) {
        throw new Error('There is nothing to save');
      }

      await ws.sendFileAsText(pyFilePath, doc.python);
    },

    runCode(code) {
      ws.runCode(code);
    },

    runDoc(doc: DocumentState) {
      if (!doc.fileName) {
        throw new Error('Must be saved');
      }

      const moduleName = getBaseName(doc.fileName);

      const code = `
import sys
if '${moduleName}' in sys.modules: del sys.modules['${moduleName}']
import ${moduleName}
      `;

      ws.runCode(code);
    },

    async setStartup(doc: DocumentState) {
      if (!doc.fileName) {
        throw new Error('Must be saved');
      }

      const moduleName = getBaseName(doc.fileName);

      const script = `import ${moduleName}\n`;

      await ws.sendFileAsText('/user/main.py', script);
    },

    async listFiles(cwd: string) {
      const files = await ws.listFiles(cwd);

      return files
        .filter(({ filename, isdir }) => isdir || filename.slice(-4) === '.xml' || filename.slice(-3) === '.py')
        .filter(({ filename }) => filename !== 'boot.py');
    },

    async getFileAsText(file) {
      const text = await ws.getFileAsText(file);

      return text;
    },

    async sendFileAsText(file, text) {
      await ws.sendFileAsText(file, text);
    },

    sendFile(f) {
      return ws.sendFile(f);
    },

    onSocketStatusChange(handler: (status: SocketStatus) => void) {
      ws.on('statusChange', handler);
    },
  };
}

function getHost() {
  // Running of localhost means that we're debugging so connect to remote ESP
  if (location.hostname === 'localhost') {
    const ip = prompt('Enter IP address of ESP32:', localStorage.getItem('esp32-address') || '');

    if (ip === null || ip.trim() === '') {
      // throw new Error('Must enter an IP address of ESP32');
      return null;
    }

    localStorage.setItem('esp32-address', ip);

    return `${ip}:8266`;
  }

  // Otherwise assume the IP of the websocket is the same as the UI
  return `${location.hostname}:8266`;
}
