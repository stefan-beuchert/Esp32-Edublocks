import { MpFile, SocketStatus } from './micropython-ws';

export const EduBlocksXML = 'xml';
export const PythonScript = 'py';

export type FileType = typeof EduBlocksXML | typeof PythonScript;

export interface BlocklyDocumentState {
  fileType: typeof EduBlocksXML;
  dirName: string;
  fileName: string | null;
  xml: string | null;
  python: string | null;
  pythonClean: boolean;
}

export interface PythonDocumentState {
  fileType: typeof PythonScript;
  dirName: string;
  fileName: string | null;
  python: string | null;
  pythonClean: false;
}

export type DocumentState = BlocklyDocumentState | PythonDocumentState;

export interface FileSelectResult {
  dirName: string;
  fileName: string;
  contents: string;
}

export interface TerminalInterface {
  onData(handler: (data: string) => void): void;

  focus(): void;
  write(s: string): void;
}

export interface App {
  assignTerminal(term: TerminalInterface): void;

  save(doc: DocumentState): Promise<void>;

  runCode(code: string): void;
  runDoc(doc: DocumentState): void;
  setStartup(doc: DocumentState): Promise<void>;

  listFiles(cwd: string): Promise<MpFile[]>;

  getFileAsText(src_fname: string): Promise<string>;
  sendFileAsText(file: string, text: string): Promise<void>;

  sendFile(f: File): void;

  onSocketStatusChange(handler: (status: SocketStatus) => void): void;
}