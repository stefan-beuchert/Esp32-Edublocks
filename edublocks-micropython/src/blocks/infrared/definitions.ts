export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['remote_class'] = {
    init() {
      this.appendDummyInput()
          .appendField('remote_class');
      this.appendStatementInput('DO')
          .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('remote_class');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['create_def_with_self'] = {
    init() {
      this.appendDummyInput()
          .appendField('create_def_with_self')
          .appendField('Name = ')
          .appendField(new Blockly.FieldTextInput('className'), 'className');
      this.appendStatementInput('DO')
          .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('create_def_with_self');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['create_def_with_self_and_source'] = {
    init() {
      this.appendDummyInput()
          .appendField('create_def_with_self_and_source')
          .appendField('Name = ')
          .appendField(new Blockly.FieldTextInput('className'), 'className');
      this.appendStatementInput('DO')
          .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
    this.setTooltip('create_def_with_self_and_source');
    this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['init_def_body'] = {
    init() {
      this.appendDummyInput()
        .appendField('init_def_body')
        .appendField('PIN = ')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('init_def_body');
      this.setHelpUrl('http://www.example.com/');
    },
  };
  
  Blocks['set_time'] = {
    init() {
      this.appendDummyInput()
        .appendField('set_time');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('set_time');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['set_m'] = {
    init() {
      this.appendDummyInput()
        .appendField('set_m');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('set_m');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['set_bin'] = {
    init() {
      this.appendDummyInput()
        .appendField('set_bin');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('set_bin');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['return_hex'] = {
    init() {
      this.appendDummyInput()
        .appendField('return_hex');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('return_hex');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['decode_body'] = {
    init() {
      this.appendDummyInput()
        .appendField('decode_body');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('decode_body');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['buffer_set_0'] = {
    init() {
      this.appendDummyInput()
        .appendField('buffer_set_0');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('buffer_set_0');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['tick_bigger_200000'] = {
    init() {
      this.appendDummyInput()
        .appendField('tick_bigger_200000');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('tick_bigger_200000');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['time_sleep_ms'] = {
    init() {
      this.appendDummyInput()
        .appendField('time_sleep_ms')
        .appendField('ms = ')
        .appendField(new Blockly.FieldTextInput('ms'), 'ms');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('time_sleep_ms');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['handler_def_body'] = {
    init() {
      this.appendDummyInput()
        .appendField('handler_def_body');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('handler_def_body');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['if_interrupt_request_0'] = {
    init() {
      this.appendDummyInput()
        .appendField('if_interrupt_request_0');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(336);
      this.setTooltip('if_interrupt_request_0');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['using_ir_remote'] = {
      init() {
        this.appendDummyInput()
            .appendField('using_ir_remote')
            .appendField('PIN = ')
            .appendField(new Blockly.FieldTextInput('pin'), 'pin')
            .appendField(':');
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
