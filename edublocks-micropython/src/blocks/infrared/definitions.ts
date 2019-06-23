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
    },
  };

  Blocks['if_signal_valid'] = {
    init() {
      this.appendDummyInput()
          .appendField('if signal is valid');
      this.appendStatementInput('DO')
          .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('Check if signal is valid');
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
    },
  };
  
}
