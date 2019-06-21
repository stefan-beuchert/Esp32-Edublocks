export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['using_ir_remote'] = {
      init() {
        this.appendDummyInput()
            .appendField('using_ir_remote')
            .appendField('PIN = ')
            .appendField(new Blockly.FieldTextInput('pin'), 'pin');
        this.appendStatementInput('DO')
            .appendField('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
      this.setTooltip('using_ir_remote');
      this.setHelpUrl('http://www.example.com/');
      },
    };

    Blocks['if'] = {
      init() {
        this.appendDummyInput()
          .appendField('if')
          .appendField(new Blockly.FieldTextInput('0'), 'var')
          .appendField(':');
        this.appendStatementInput('DO')
          .appendField('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(336);
        this.setTooltip('If Statement.');
        this.setHelpUrl('');
      },
    };
}
