import React = require('preact');
import { Component } from 'preact';
import SelectModal, { SelectModalOption, SelectModalButton } from './SelectModal';
import { MpFile } from '../micropython-ws';
import { App, FileSelectResult } from '../types';
import { joinDirNameAndFileName } from '../lib';

interface FileModalProps {
  app: App;

  onSelect(result: FileSelectResult | null): void;
}

interface FileModalState {
  files: MpFile[];
  cwd: string;
}

export default class FileModal extends Component<FileModalProps, FileModalState> {
  public constructor(props: FileModalProps) {
    super(props);

    this.state = {
      files: [],
      cwd: '/user',
    };
  }

  protected async componentDidMount() {
    const files = await this.props.app.listFiles(this.state.cwd);

    this.setState({ files });
  }

  private async changeDirectoryRelative(dir: string) {
    const { cwd } = this.state;

    let newCwd;

    if (dir === '..') {
      newCwd = cwd.split('/').slice(0, -1).join('/');

      if (newCwd === '') {
        newCwd = '/';
      }
    } else {
      newCwd = joinDirNameAndFileName(cwd, dir);
    }

    if (!newCwd) {
      throw new Error('Invalid dir path');
    }

    await this.changeDirectory(newCwd);
  }

  private async changeDirectory(cwd: string) {
    const files = await this.props.app.listFiles(cwd);

    this.setState({ files, cwd });
  }

  private async onFileSelected(file: SelectModalOption) {
    const selectedFile = file.obj as MpFile;

    if (selectedFile.isdir) {
      await this.changeDirectoryRelative(selectedFile.filename);
    } else {
      const filePath = joinDirNameAndFileName(this.state.cwd, selectedFile.filename);

      if (!filePath) {
        throw new Error('Invalid file path');
      }

      const contents = await this.props.app.getFileAsText(filePath);

      this.props.onSelect({
        dirName: this.state.cwd,
        fileName: selectedFile.filename,
        contents,
      });
    }
  }

  private async onModalButtonClick(key: string) {
    if (key === 'up') {
      await this.changeDirectoryRelative('..');
    }

    if (key === 'samples') {
      await this.changeDirectory('/samples');
    }

    if (key === 'close') {
      this.props.onSelect(null);
    }
  }

  public render() {
    const options = this.state.files.map((file) => ({
      label: `${file.filename} (${file.isdir ? 'Folder' : 'File'})`,
      obj: file,
    }));

    const buttons: SelectModalButton[] = [
      ...(this.state.cwd !== '/' ? [{ key: 'up', label: 'Go up', position: 'left' as 'left' }] : []),
      { key: 'samples', label: 'Samples', position: 'left' },
    ];

    return (
      <SelectModal
        title={`Browsing ${this.state.cwd}`}
        selectLabel="Open"
        buttons={buttons}
        options={options}
        onSelect={(file) => this.onFileSelected(file)}
        onButtonClick={(key) => this.onModalButtonClick(key)} />
    );
  }
}
