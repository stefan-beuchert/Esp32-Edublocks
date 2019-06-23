export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['class'] = {
    init() {
      this.appendDummyInput()
          .appendField('class ')
          .appendField(new Blockly.FieldTextInput('className'), 'className');
      this.appendStatementInput('DO')
          .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('Generate class');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['using_remote'] = {
    init() {
      this.appendDummyInput()
          .appendField('using remote ')
          .appendField(new Blockly.FieldTextInput('className'), 'className');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('Using remote class');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['__init__'] = {
    init() {
      this.appendDummyInput()
          .appendField('init(pin = ')
          .appendField(new Blockly.FieldTextInput('pin'), 'pin')
          .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('Initiate remote class');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['handler'] = {
    init() {
      this.appendDummyInput()
          .appendField('handler()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('Handle remote class');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['routine'] = {
    init() {
      this.appendDummyInput()
          .appendField('routine()');
      this.appendStatementInput('DO')
          .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('Handle signals');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['signal_recv'] = {
    init() {
      this.appendDummyInput()
          .appendField('handle_signal()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('Hanlde a specific signal');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['decode'] = {
    init() {
      this.appendDummyInput()
          .appendField('decode()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('Decode signal');
    this.setHelpUrl('http://www.example.com/');
    },
  };
  
}
