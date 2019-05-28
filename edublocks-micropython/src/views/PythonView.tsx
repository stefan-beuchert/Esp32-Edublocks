import React = require('preact');
import { Component } from 'preact';
import _ = require('lodash');

const ace = (self as any).ace;

interface PythonViewProps {
  visible: boolean;
  python: string | null;

  onChange(python: string): void;
}

export default class PythonView extends Component<PythonViewProps, {}> {
  private editorDiv?: Element;
  private editor: any;

  protected componentWillReceiveProps(nextProps: PythonViewProps) {
    if (nextProps.visible) {
      // Need to check visible change as well to force refresh
      if (this.getCode() !== nextProps.python || this.props.visible !== nextProps.visible) {
        this.setCode(nextProps.python);
      }
    }
  }

  protected componentDidMount() {
    if (!this.editorDiv) { throw new Error('No editor div'); }

    this.editor = ace.edit(this.editorDiv);

    this.editor.setTheme('ace/theme/monokai');
    this.editor.getSession().setMode('ace/mode/python');

    this.editor.on('change', _.debounce(() => {
      const code = this.getCode();

      this.props.onChange(code);
    }, 100));
  }

  private getCode(): string {
    return this.editor.getValue();
  }

  private setCode(code: string | null) {
    this.editor.setValue(code || '');
  }

  public render() {
    return (
      <div style={{ display: this.props.visible ? 'block' : 'none' }} id="python">
        <div id="editor" ref={(div) => this.editorDiv = div}></div>
      </div>
    );
  }
}
