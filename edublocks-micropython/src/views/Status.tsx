import React = require('preact');

import { DocumentState } from '../types';
import { SocketStatus } from '../micropython-ws';
import { joinDirNameAndFileName } from '../lib';

interface StatusProps {
  connectionStatus: SocketStatus;
  doc: DocumentState;
  sync: boolean;

  onChangeName(file: string): void;
}

export default function Status(props: StatusProps) {
  function changeName() {
    const fileName = prompt('Enter new filename', props.doc.fileName || '');

    if (fileName) {
      props.onChangeName(fileName);
    }
  }

  function getDocumentFilePath() {
    const { doc } = props;

    return joinDirNameAndFileName(doc.dirName, doc.fileName);
  }

  function getFileTypeString(): string {
    switch (props.doc.fileType) {
      case 'xml':
        return 'Blockly Script';
      case 'py':
        return 'Python Script';
    }
  }

  return (
    <div class="Status">
      <span class="Status__filename" onClick={() => changeName()}>{getDocumentFilePath() || '[New file]'} ({getFileTypeString()})</span>

      {!props.sync ? <span class="Status__sync">(Not in sync with block view)</span> : null}

      <span class={`Status__connection Status__connection--${props.connectionStatus}`}>{props.connectionStatus}</span>
    </div>
  );
}
