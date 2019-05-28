export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_lirc'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("import lirc");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(20);
       this.setTooltip("Import lirc");
       this.setHelpUrl("");
        }
      };
}