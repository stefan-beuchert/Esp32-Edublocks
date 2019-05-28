export default function define(Python: Blockly.BlockGenerators) {
  Python['http_client_import_rest'] = function (block) {
    let code = 'import http.client \n';
    return code;
  };

  Python['https_client_create_connection'] = function (block) {
    let text_url = block.getFieldValue('URL');
    let code = 'conn = http.client.HTTPSConnection("' + text_url + '") \n';
    return code;
  };

  Python['http_client_create_connection'] = function (block) {
    let text_url = block.getFieldValue('URL');
    let text_port = block.getFieldValue('PORT');
    let code = 'conn = http.client.HTTPConnection("' + text_url + '",' + text_port + ') \n';
    return code;
  };

  Python['http_client_request'] = function (block) {
    let text_method = block.getFieldValue('method');
    let text_request = block.getFieldValue('request');
    let text_headers = block.getFieldValue('headers');
    let text_body = block.getFieldValue('body');
    let code = '';
    code = 'conn.request("' + text_method + '", "' + text_request + '", body="' + text_body + '", headers={' + text_headers + '}) \n';
    return code;
  };

  Python['http_client_responce'] = function (block) {
    let code = 'r1 = conn.getresponse() \n';
    return code;
  };

  Python['inline_print'] = function (block) {
    let text_print2 = Blockly.Python.statementToCode(block, 'VALUE');
    // TODO: Assemble Python into code variable.
    let code = 'print(' + text_print2 + ')\n';
    return code;
  };

  Python['http_client_status'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'r1.status';
    return code;
  };

  Python['http_client_reason'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'r1.reason';
    return code;
  };

  Python['http_client_read'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'r1.read().decode()';
    return code;
  };
}
