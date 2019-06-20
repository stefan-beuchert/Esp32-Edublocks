export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['using_ir_remote'] = {
      init() {
        this.appendDummyInput()
            .appendField('using ir remote')
            .appendField('PIN = ')
            .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        this.appendStatementInput('DO')
            .appendField('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
      this.setTooltip('Using IR Remote');
      this.setHelpUrl('http://www.example.com/');
      },
    };
}
