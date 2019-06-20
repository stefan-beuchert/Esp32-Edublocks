export default function define(Python: Blockly.BlockGenerators) {
    Python['import_lirc'] = function (block) {
        //const code = 'import lirc\n';
        // 'import RPi.GPIO as GPIO \n' +
        // 'import time \n' +
        // 'sensor = 16 \n' +     
        // 'GPIO.setmode(GPIO.BOARD) \n' +
        // 'GPIO.setup(sensor,GPIO.IN) \n' +
        // 'print "IR Sensor Ready....." \n' +
        // 'print " "';
        
        const code = 'import lirc';
        return code;
    };
}
