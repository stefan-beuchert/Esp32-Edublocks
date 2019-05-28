import React = require('preact');
import { Component } from 'preact';
import { getToolBoxXml } from '../blocks';

interface BlocklyViewProps {
  visible: boolean;
  xml: string | null;

  onChange(xml: string, python: string): void;
}

export default class BlocklyView extends Component<BlocklyViewProps, {}> {
  private blocklyDiv?: Element;
  private xml: string | null;

  constructor(props: BlocklyViewProps) {
    super(props);

    this.xml = null;
  }

  protected componentWillReceiveProps(nextProps: BlocklyViewProps) {
    if (nextProps.visible) {
      if (this.xml !== nextProps.xml) {
        this.setXml(nextProps.xml);
      }
    }
  }

  protected componentDidMount() {
    if (this.blocklyDiv) {
      const toolbox = getToolBoxXml();

      const workspace = Blockly.inject(this.blocklyDiv, {
        media: 'blockly/media/',
        toolbox,
      }) as Blockly.WorkspaceSvg;

      workspace.addChangeListener(() => {
        const xml = this.getXml();
        const python = this.getPython();

        this.xml = xml;

        this.props.onChange(xml, python);
      });

      Blockly.svgResize(workspace);
    }
  }

  private getXml(): string {
    const xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);

    return Blockly.Xml.domToPrettyText(xml);
  }

  private getPython(): string {
    return Blockly.Python.workspaceToCode(Blockly.mainWorkspace);
  }

  private setXml(xml: string | null) {
    Blockly.mainWorkspace.clear();

    if (typeof xml === 'string') {
      const textToDom = Blockly.Xml.textToDom(xml);

      Blockly.Xml.domToWorkspace(textToDom, Blockly.mainWorkspace);

      const python = this.getPython();

      this.props.onChange(xml, python);
    }
  }

  public render() {
    return (
      <div
        style={{ visibility: this.props.visible ? 'visible' : 'hidden' }}
        id="blockly"
        ref={(div) => this.blocklyDiv = div}>
      </div>
    );
  }
}
