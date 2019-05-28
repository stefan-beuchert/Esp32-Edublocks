export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['http_client_import_rest'] = {
    init() {
      this.appendDummyInput()
        .appendField('import http.client');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Imports the http client library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['https_client_create_connection'] = {
    init() {
      this.appendDummyInput()
        .appendField('conn = http.client.HTTPSConnection("')
        .appendField(new Blockly.FieldTextInput('www.edublocks.org'), 'URL')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Created a connection');
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
    },
  };

  Blocks['http_client_create_connection'] = {
    init() {
      this.appendDummyInput()
        .appendField('conn = http.client.HTTPConnection("')
        .appendField(new Blockly.FieldTextInput('www.edublocks.org'), 'URL')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('80'), 'PORT')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Created a connection');
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
    },
  };

  Blocks['http_client_request'] = {
    init() {
      this.appendDummyInput()
        .appendField('conn.request(')
        .appendField(new Blockly.FieldDropdown([['GET', 'GET'], ['POST', 'POST'], ['PUT', 'PUT'], ['DELETE', 'DELETE']]), 'method')
        .appendField(',"')
        .appendField(new Blockly.FieldTextInput('/'), 'request')
        .appendField('","')
        .appendField(new Blockly.FieldTextInput(''), 'body')
        .appendField('",{')
        .appendField(new Blockly.FieldTextInput(''), 'headers')
        .appendField('})');

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Create a request text_headers(method,request,body,headers)');
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
    },
  };

  Blocks['http_client_responce'] = {
    init() {
      this.appendDummyInput()
        .appendField('r1 = conn.getresponse()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Get the responce.');
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
    },
  };

  Blocks['inline_print'] = {
    init() {
      this.appendValueInput('VALUE')
        .setCheck(['String', 'Number'])
        .appendField('print');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Use this to print to the output box.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['http_client_status'] = {
    init() {
      this.appendDummyInput()
        .appendField('r1.status');
      this.setOutput(true, 'Number');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Get the responce.');
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
    },
  };

  Blocks['http_client_reason'] = {
    init() {
      this.appendDummyInput()
        .appendField('r1.reason');
      this.setOutput(true, 'Number');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Get the responce.');
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
    },
  };

  Blocks['http_client_read'] = {
    init() {
      this.appendDummyInput()
        .appendField('r1.read');
      this.setOutput(true, 'Number');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Get the responce.');
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
    },
  };
}
