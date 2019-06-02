export default function define(Python: Blockly.BlockGenerators) {
    Python['import_lirc'] = function (block) {
        const code = 'import lirc\n';
        return code;
      };
}
