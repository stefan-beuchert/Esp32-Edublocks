export default function define(Python: Blockly.BlockGenerators) {
    Python['import_lirc'] = function (block) {
        //const code = 'import lirc\n';
        const code = 'import RPi.GPIO as GPIO \n' +
        'import time \n' +
        
        'sensor = 16 \n' +
        //'buzzer = 18 \n'
        
        'GPIO.setmode(GPIO.BOARD) \n' +
        'GPIO.setup(sensor,GPIO.IN) \n' +
        //'GPIO.setup(buzzer,GPIO.OUT) \n'
        
        //'GPIO.output(buzzer,False) \n'
        'print "IR Sensor Ready....." \n' +
        'print " "'
        
        // 'try: \n'
        //    'while True: \n'
        //       'if GPIO.input(sensor): \n'
        //           //'GPIO.output(buzzer,True) \n'
        //           'print "Object Detected" \n'
        //           'while GPIO.input(sensor): \n'
        //               'time.sleep(0.2) \n'
        //       'else: \n'
        //           'GPIO.output(buzzer,False) \n'
        
        
        // 'except KeyboardInterrupt: \n'
        //     'GPIO.cleanup() \n'
        return code;
      };
}
