import { FileType, EduBlocksXML, PythonScript } from "./types";

export const sleep = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const readArrayBuffer = (blob: Blob) => {
  return new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve((e.target as any).result);
    };

    reader.readAsArrayBuffer(blob);
  });
};

export const readText = (blob: Blob) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve((e.target as any).result);
    };

    reader.readAsText(blob);
  });
};

export const joinDirNameAndFileName = (dirName: string, fileName: string | null) => {
  if (fileName === null) {
    return null;
  }

  return `${dirName}/${fileName}`.replace(/\/\//g, '/');
};

export function getFileType(file: string): FileType | null {
  if (file.indexOf('.xml') === file.length - 4) {
    return EduBlocksXML;
  }

  if (file.indexOf('.py') === file.length - 3) {
    return PythonScript;
  }

  return null;
}

export function getBaseName(fileName: string) {
  if (fileName.indexOf('.') === -1) {
    return fileName;
  }

  return fileName.split('.').slice(0, -1).join('.');
}
