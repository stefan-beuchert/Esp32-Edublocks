export default function define(Python: Blockly.BlockGenerators) {
  Python['import_edupy'] = function (block) {
    const code = 'from edupy import *\n';
    return code;
  };

  Python['import_signal'] = function (block) {
    const code = 'from signal import pause\n';
    return code;
  };

  Python['pause_s'] = function (block) {
    const code = 'pause()\n';
    return code;
  };

  Python['random'] = function (block) {
    const code = 'import random\n';
    return code;
  };

  Python['while_true'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'while True:\n' + branch;
  };

  Python['pass'] = function (block) {
    const code = 'pass \n';
    return code;
  };

  Python['if'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'if ' + text_const + ':\n' + branch;
  };

  Python['varprint'] = function (block) {
    const text_const = block.getFieldValue('var');
    // TODO: Assemble Python into code variable.
    const code = 'print(' + text_const + ')\n';
    return code;
  };

  Python['defcall'] = function (block) {
    let text_fname = block.getFieldValue('fname');
    let text_extra = block.getFieldValue('extra');
    // TODO: Assemble Python into code variable.
    let code = text_fname + '(' + text_extra + ')\n';
    return code;
  };

  Python['ifcroc'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_this = block.getFieldValue('this');
    const dropdown_crocsigns = block.getFieldValue('crocsigns');
    const text_that = block.getFieldValue('that');
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'if ' + text_this + ' ' + dropdown_crocsigns + ' ' + text_that + ':\n' + branch;
    return code;
  };

  Python['varminus'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_2 = block.getFieldValue('2');
    // TODO: Assemble Python into code variable.
    const code = text_1 + ' -= ' + text_2 + '\n';
    return code;
  };

  Python['for'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_letter = block.getFieldValue('letter');
    const text_no = block.getFieldValue('no');
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_letter + ' in range(' + text_no + '):\n' + branch;
    return code;
  };

  Python['advancedforloops'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_x = block.getFieldValue('x');
    const text_y = block.getFieldValue('y');
    // const statements_do = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_x + ' in ' + text_y + ':\n' + branch;
    return code;
  };

  Python['ifequals'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_this = block.getFieldValue('this');
    const text_that = block.getFieldValue('that');
    // const statements_do = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'if ' + text_this + ' == ' + text_that + ':\n' + branch;
    return code;
  };

  Python['importinputs'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import inputs\n';
    return code;
  };

  Python['return2'] = function (block) {
    const text_return = block.getFieldValue('return');
    // TODO: Assemble Python into code variable.
    const code = 'return ' + text_return + '\n';
    return code;
  };

  Python['elif'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'elif ' + text_const + ':\n' + branch;
  };

  Python['else'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'else:\n' + branch;
  };

  Python['df'] = function (block) {
    const text_def = block.getFieldValue('def');
    // TODO: Assemble Python into code variable.
    const code = text_def + '()\n';
    return code;
  };

  Python['whileout'] = function (block) {
    const text_1 = block.getFieldValue('1');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // TODO: Assemble Python into code variable.
    const code = 'while ' + text_1 + ':\n' + branch;
    return code;
  };

  Python['time'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import time\n';
    return code;
  };

  Python['import_math'] = function (block) {
    const code = 'import math\n';
    return code;
  };

  Python['sleep'] = function (block) {
    const text_sleeptime = block.getFieldValue('sleepTime');
    const code = 'time.sleep(' + text_sleeptime + ')\n';
    return code;
  };

  Python['print'] = function (block) {
    const text_print = block.getFieldValue('print');
    // TODO: Assemble Python into code variable.
    const code = 'print("' + text_print + '")\n';
    return code;
  };

  Python['equalsblock'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_2 = block.getFieldValue('2');
    // TODO: Assemble Python into code variable.
    const code = text_1 + '=' + text_2 + '\n';
    return code;
  };

  Python['define'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_2 = block.getFieldValue('2');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    const code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
    return code;
  };

  Python['greater'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_v = block.getFieldValue('v');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // TODO: Assemble Python into code variable.
    const code = 'while ' + text_1 + ' > ' + text_v + ':\n' + branch;
    return code;
  };
}
