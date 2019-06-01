export default function define(Python: Blockly.BlockGenerators) {
    Python['import_lirc'] = () => {
        return 'import lirc\n';
      };
}
