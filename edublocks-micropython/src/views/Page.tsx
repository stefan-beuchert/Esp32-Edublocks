import React = require('preact');
import { Component } from 'preact';

import Nav from './Nav';
import BlocklyView from './BlocklyView';
import PythonView from './PythonView';
import TerminalView from './TerminalView';
import FileModel from './FileModal';
import Status from './Status';
import { App, EduBlocksXML, PythonScript, FileType, DocumentState, BlocklyDocumentState, PythonDocumentState, FileSelectResult } from '../types';
import { sleep, joinDirNameAndFileName, getFileType, getBaseName } from '../lib';
import { MpFile, SocketStatus } from '../micropython-ws';
import SelectModal, { SelectModalOption } from './SelectModal';

type AdvancedFunction = 'New Python Script' | 'Export' | 'Set As Startup Script';
const AdvancedFunctions: AdvancedFunction[] = ['New Python Script', 'Export', 'Set As Startup Script'];

const ViewModeBlockly = 'blockly';
const ViewModePython = 'python';

type ViewMode = typeof ViewModeBlockly | typeof ViewModePython;

interface PageProps {
  app: App;
}

interface PageState {
  connectionStatus: SocketStatus;
  viewMode: ViewMode;
  terminalOpen: boolean;
  dirty: boolean;

  modal: null | 'File' | 'Functions';

  doc: Readonly<DocumentState>;
}

export default class Page extends Component<PageProps, PageState> {
  private blocklyView: BlocklyView;
  private pythonView: PythonView;
  public terminalView: TerminalView;

  constructor(props: PageProps) {
    super(props);

    this.state = {
      connectionStatus: 'disconnected',
      viewMode: ViewModeBlockly,
      terminalOpen: false,
      dirty: true,

      modal: null,

      doc: {
        fileType: EduBlocksXML,
        dirName: '/user',
        fileName: null,
        xml: null,
        python: null,
        pythonClean: true,
      },
    };

    this.props.app.onSocketStatusChange((connectionStatus) => {
      this.setState({ connectionStatus });
    });
  }

  private renameDocument(fileName: string) {
    const { doc } = this.state;

    let fileType = getFileType(fileName);

    if (fileType === null) {
      if (doc.fileType === EduBlocksXML) {
        fileName = `${fileName}.${EduBlocksXML}`;

        fileType = EduBlocksXML;
      } else if (doc.fileType === PythonScript) {
        fileName = `${fileName}.${PythonScript}`;

        fileType = PythonScript;
      } else {
        throw new Error('Invalid type');
      }
    }

    const baseName = getBaseName(fileName);

    if (baseName.length === 0) {
      alert('Filename is empty');

      return;
    }

    if (!/^([a-z]|[0-9]|_)+$/.test(baseName)) {
      alert('Filenames can only contain lowercase letters and underscores');

      return;
    }

    if (baseName.charCodeAt(0) >= 48 && baseName.charCodeAt(0) <= 57) {
      alert('Filename must not being with a number');

      return;
    }

    if (fileType === 'xml' && doc.fileType === 'xml') {
      const xmlDoc: BlocklyDocumentState = {
        ...doc,
        fileType,
        fileName,
      };

      this.setState({ doc: xmlDoc });
    }

    if (fileType === 'py' && doc.fileType === 'py') {
      const pyDoc: PythonDocumentState = {
        ...doc,
        fileType,
        fileName,
      };

      this.setState({ doc: pyDoc });
    }

    // Convert from XML -> PY
    if (fileType === 'py' && doc.fileType === 'xml') {
      const pyDoc: PythonDocumentState = {
        fileType,
        dirName: doc.dirName,
        fileName,
        python: doc.python,
        pythonClean: false,
      };

      this.setState({ doc: pyDoc });
    }

    // Convert from PY -> XML
    if (fileType === 'xml' && doc.fileType === 'py') {
      alert('Cannot convert a Python document to an EduBlocks document');

      return;
    }

    if (fileType === PythonScript) {
      this.switchView(ViewModePython);
    } else {
      this.switchView(ViewModeBlockly);
    }
  }

  private readBlocklyContents(dirName: string, fileName: string, xml: string, dirty: boolean) {
    const doc: DocumentState = {
      fileType: EduBlocksXML,
      dirName,
      fileName,
      xml,
      python: null,
      pythonClean: true,
    };

    this.setState({ doc, dirty });

    this.switchView(ViewModeBlockly);
  }

  private readPythonContents(dirName: string, fileName: string, python: string, dirty: boolean) {
    if (this.state.doc.python === python) { return; }

    const doc: DocumentState = {
      fileType: PythonScript,
      dirName,
      fileName,
      xml: null,
      python,
      pythonClean: false,
    };

    this.setState({ doc, dirty });

    this.switchView(ViewModePython);
  }

  private updateFromBlockly(xml: string, python: string) {
    const { doc } = this.state;

    // Only if the XML is changed do we need to set the dirty flag.
    // Otherwise what is already saved on the device is assumed to be up-to-date.
    const xmlChanged = doc.fileType === EduBlocksXML && doc.xml !== xml;

    if (
      doc.fileType === EduBlocksXML &&
      doc.xml === xml &&
      doc.python === python
    ) {
      return;
    }

    if (doc.python !== python && !doc.pythonClean) {
      alert('Python changes have been overwritten!');
    }

    const newDoc: DocumentState = {
      fileType: EduBlocksXML,
      dirName: doc.dirName,
      fileName: doc.fileName,
      xml,
      python,
      pythonClean: true,
    };

    this.setState({ doc: newDoc });

    if (xmlChanged) {
      this.setState({ dirty: xmlChanged });
    }
  }

  private updateFromPython(python: string) {
    if (this.state.doc.python === python) { return; }

    console.log('updateFromPython', python);

    const doc: DocumentState = { ...this.state.doc, python, pythonClean: false };

    this.setState({ doc, dirty: true });
  }

  private newEduBlocksScript() {
    const doc: DocumentState = {
      fileType: EduBlocksXML,
      dirName: '/user',
      fileName: null,
      xml: null,
      python: null,
      pythonClean: true,
    };

    this.setState({ doc, dirty: true });

    this.switchView('blockly');
  }

  private newPythonScript() {
    const doc: DocumentState = {
      fileType: PythonScript,
      dirName: '/user',
      fileName: null,
      python: null,
      pythonClean: false,
    };

    this.setState({ doc, dirty: true });

    this.switchView('python');
  }

  protected async componentDidMount() {

  }

  private toggleView(): 0 {
    switch (this.state.viewMode) {
      case ViewModeBlockly:
        return this.switchView(ViewModePython);

      case ViewModePython:
        return this.switchView(ViewModeBlockly);
    }
  }

  private switchView(viewMode: ViewMode): 0 {
    switch (viewMode) {
      case ViewModeBlockly:
        if (this.state.doc.fileType === PythonScript) {
          alert('Block view not available');

          return 0;
        }

        this.setState({ viewMode: 'blockly' });

        return 0;

      case ViewModePython:
        this.setState({ viewMode: 'python' });

        return 0;
    }
  }

  private async run() {
    if (await this.save()) {
      // this.props.app.runCode(this.state.doc.python || '');

      this.props.app.runDoc(this.state.doc);

      this.setState({ terminalOpen: true });
      this.terminalView.focus();

      setTimeout(() => this.terminalView.focus(), 250);
    }
  }

  public openFileListModal() {
    this.setState({ modal: 'File' });
  }

  public closeFileListModal() {
    this.setState({ modal: null });
  }

  private handleFileContents(dirName: string, fileName: string, contents: string): 0 {
    let sample = false;

    if (dirName === '/samples') {
      dirName = '/user';

      sample = true;
    }

    switch (getFileType(fileName)) {
      case EduBlocksXML:
        this.readBlocklyContents(dirName, fileName, contents, sample);

        return 0;

      case PythonScript:
        this.readPythonContents(dirName, fileName, contents, sample);

        return 0;

      case null:
        alert('Unknown file type');

        return 0;
    }
  }

  public onBlocklyChange(xml: string, python: string) {
    this.updateFromBlockly(xml, python);
  }

  public onPythonChange(python: string) {
    this.updateFromPython(python);
  }

  private checkReadyToSave() {
    if (!this.state.doc.fileName) {
      const fileName = prompt('Enter filename');

      if (fileName) {
        this.renameDocument(fileName);
      }
    }

    if (!this.state.doc.fileName) {
      alert('You must specify a filename in order to save');

      return false;
    }

    return true;
  }

  public async save() {
    if (!this.state.dirty) {
      return true;
    }

    if (this.checkReadyToSave()) {
      try {
        await this.props.app.save(this.state.doc);

        this.setState({ dirty: false });
      } catch (err) {
        if (err instanceof Error) {
          alert(err.message);
        }
      }

      return true;
    }

    return false;
  }

  private async onFileSelected(result: FileSelectResult | null) {
    this.closeFileListModal();

    if (result) {
      const { dirName, fileName, contents } = result;

      this.handleFileContents(dirName, fileName, contents);
    }
  }

  private onSelectFile(file: File) {
    this.props.app.sendFile(file);
  }

  private onTerminalClose() {
    this.setState({ terminalOpen: false });
  }

  private getXml(): string {
    if (this.state.doc.fileType === 'xml') {
      return this.state.doc.xml || '';
    }

    return '';
  }

  private getDocumentFilePath() {
    const { doc } = this.state;

    return joinDirNameAndFileName(doc.dirName, doc.fileName);
  }

  private export() {
    const { doc } = this.state;

    const fileName = doc.fileName || `untitled.${doc.fileType}`;

    if (doc.fileType === EduBlocksXML) {
      const blob = new Blob([doc.xml], { type: 'text/xml' });

      saveAs(blob, fileName);
    }

    if (doc.fileType === PythonScript) {
      const blob = new Blob([doc.python], { type: 'text/xml' });

      saveAs(blob, fileName);
    }
  }

  private getAdvancedFunctionList(): SelectModalOption[] {
    return AdvancedFunctions.map((func) => ({
      label: func,
      obj: func,
    }));
  }

  private openAdvancedFunctionDialog() {
    this.setState({ modal: 'Functions' });
  }

  private closeAdvancedFunctionDialog() {
    this.setState({ modal: null });
  }

  private async runAdvancedFunction(func: AdvancedFunction) {
    if (func === 'New Python Script') {
      this.newPythonScript();
    }

    if (func === 'Export') {
      this.export();
    }

    if (func === 'Set As Startup Script') {
      if (await this.save()) {
        await this.props.app.setStartup(this.state.doc);
      }
    }

    this.closeAdvancedFunctionDialog();
  }

  public render() {
    return (
      <div class="Page">
        <Nav
          onFunction={() => this.openAdvancedFunctionDialog()}
          onRun={() => this.run()}
          onDownloadPython={() => { }}
          onOpen={() => this.openFileListModal()}
          onSave={() => this.save()}
          onNew={() => this.newEduBlocksScript()}
          onSelectFile={(file) => this.onSelectFile(file)} />

        <Status
          connectionStatus={this.state.connectionStatus}
          doc={this.state.doc}
          sync={this.state.doc.pythonClean}

          onChangeName={(file) => this.renameDocument(file)} />

        <section id="workspace">
          <button
            id="toggleViewButton"
            onClick={() => this.toggleView()}>

            {this.state.viewMode}

          </button>

          <BlocklyView
            ref={(c) => this.blocklyView = c}
            visible={this.state.viewMode === 'blockly'}
            xml={this.getXml()}
            onChange={(xml, python) => this.onBlocklyChange(xml, python)} />

          <PythonView
            ref={(c) => this.pythonView = c}
            visible={this.state.viewMode === 'python'}
            python={this.state.doc.python}
            onChange={(python) => this.onPythonChange(python)} />
        </section>

        <TerminalView
          ref={(c) => this.terminalView = c}
          visible={this.state.terminalOpen}
          onClose={() => this.onTerminalClose()} />

        {
          this.state.modal === 'File' &&
          <FileModel
            app={this.props.app}
            onSelect={(file) => this.onFileSelected(file)} />
        }

        {
          this.state.modal === 'Functions' &&
          <SelectModal
            title="Advanced Functions"
            selectLabel="Go"
            buttons={[]}
            options={this.getAdvancedFunctionList()}
            onSelect={(func) => this.runAdvancedFunction(func.label as AdvancedFunction)}
            onButtonClick={(key) => key === 'close' && this.closeAdvancedFunctionDialog()} />
        }
      </div>
    );
  }
}
