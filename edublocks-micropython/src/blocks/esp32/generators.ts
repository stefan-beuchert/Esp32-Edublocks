export default function define(Python: Blockly.BlockGenerators) {
  Python['import_screen'] = () => {
    return 'import screen\n';
  };

  Python['import_machine'] = () => {
    return 'import machine\n';
  };

  Python['import_neopixel'] = () => {
    return 'import neopixel\n';
  };

  Python['screen_print_line'] = (block) => {
    const text = block.getFieldValue('text');
    const line = block.getFieldValue('line');

    return `screen.print_line(${text}, ${line})\n`;
  };

  Python['pin_in_declare'] = (block) => {
    const pin_name = block.getFieldValue('pin_name');
    const pin_number = block.getFieldValue('pin_number');
    const pull_up_down = block.getFieldValue('pull_up_down');

    return `${pin_name} = machine.Pin(${pin_number}, machine.Pin.IN, machine.Pin.${pull_up_down})\n`;
  };

  Python['pin_out_declare'] = (block) => {
    const pin_name = block.getFieldValue('pin_name');
    const pin_number = block.getFieldValue('pin_number');

    return `${pin_name} = machine.Pin(${pin_number}, machine.Pin.OUT)\n`;
  };

  Python['pin_value_get'] = (block) => {
    const var_name = block.getFieldValue('var_name');
    const pin_name = block.getFieldValue('pin_name');

    return `${var_name} = ${pin_name}.value()\n`;
  };

  Python['pin_value_set'] = (block) => {
    const pin_name = block.getFieldValue('pin_name');
    const value = block.getFieldValue('value');

    return `${pin_name}.value(${value})\n`;
  };

  Python['neopixel_declare'] = (block) => {
    const pin_name = block.getFieldValue('pin_name');
    const length = block.getFieldValue('length');

    return `np = neopixel.NeoPixel(${pin_name}, ${length})\n`;
  };

  Python['led_colour_set'] = (block) => {
    const index = block.getFieldValue('index');
    const colour1 = block.getFieldValue('colour1');

    const r = parseInt(colour1.substr(1, 2), 16);
    const g = parseInt(colour1.substr(3, 2), 16);
    const b = parseInt(colour1.substr(5, 2), 16);

    return `np[${index}] = (${r}, ${g}, ${b}) # Colour = ${colour1}\n`;
  };

  Python['neopixel_write'] = () => {
    return 'np.write()\n';
  };
}
