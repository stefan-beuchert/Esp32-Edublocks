export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_screen'] = {
    init() {
      this.appendDummyInput()
        .appendField('import screen');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the screen screen library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_machine'] = {
    init() {
      this.appendDummyInput()
        .appendField('import machine');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the machine library for GPIO access.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_neopixel'] = {
    init() {
      this.appendDummyInput()
        .appendField('import neopixel');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('Imports the neopixel library for LED control.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['screen_print_line'] = {
    init() {
      this.appendDummyInput()
        .appendField('screen.print_line(')
        .appendField(new Blockly.FieldTextInput('\'Hello World!\''), 'text')
        .appendField(',')
        .appendField(new Blockly.FieldNumber(0), 'line')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Write a line of text');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pin_in_declare'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('pin'), 'pin_name')
        .appendField(' = machine.Pin(')
        .appendField(new Blockly.FieldNumber(0), 'pin_number')
        .appendField(', machine.Pin.IN, machine.Pin.')
        .appendField(new Blockly.FieldDropdown([['PULL_UP', 'PULL_UP'], ['PULL_DOWN', 'PULL_DOWN']]), 'pull_up_down')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Declare an input pin');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pin_out_declare'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('pin'), 'pin_name')
        .appendField(' = machine.Pin(')
        .appendField(new Blockly.FieldNumber(0), 'pin_number')
        .appendField(', machine.Pin.OUT)');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Declare an output pin');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pin_value_get'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('value'), 'var_name')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin_name')
        .appendField('.value()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Get pin value');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pin_value_set'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('pin'), 'pin_name')
        .appendField('.value(')
        .appendField(new Blockly.FieldNumber(0), 'value')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Set pin value');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['neopixel_declare'] = {
    init() {
      this.appendDummyInput()
        .appendField('np = neopixel.NeoPixel(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin_name')
        .appendField(', ')
        .appendField(new Blockly.FieldNumber(8), 'length')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Declare NeoPixel strip');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['led_colour_set'] = {
    init() {
      this.appendDummyInput()
        .appendField('np[')
        .appendField(new Blockly.FieldTextInput('index'), 'index')
        .appendField('] = (')
        .appendField(new Blockly.FieldColour('colour1'), 'colour1')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Set LED colour');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['neopixel_write'] = {
    init() {
      this.appendDummyInput()
        .appendField('np.write()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Write the colours to the LED strip.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
}
