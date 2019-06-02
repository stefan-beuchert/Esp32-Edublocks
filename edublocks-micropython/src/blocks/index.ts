import fs = require('fs');
import path = require('path');

let toolBoxXml = '';

toolBoxXml += '<xml>';

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import esp32Defs from './esp32/definitions';
import esp32Gens from './esp32/generators';
esp32Defs(Blockly.Blocks);
esp32Gens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'esp32', 'toolbox.xml'));

import infraredDefs from './infrared/definitions';
import infraredGens from './infrared/generators';
infraredDefs(Blockly.Blocks);
infraredGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'infrared', 'toolbox.xml'));

import gpiozeroDefs from './gpiozero/definitions';
import gpiozeroGens from './gpiozero/generators';
gpiozeroDefs(Blockly.Blocks);
gpiozeroGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'gpiozero', 'toolbox.xml'));

import advancedDefs from './advanced/definitions';
import advancedGens from './advanced/generators';
advancedDefs(Blockly.Blocks);
advancedGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'advanced', 'toolbox.xml'));

toolBoxXml += '</xml>';

function getToolBoxXml() {
  return toolBoxXml;
}

export {
  getToolBoxXml,
};
