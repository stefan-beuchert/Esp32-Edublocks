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
        
        const code = 'import pulseio \n' +
        'import board \n' +
        'import adafruit_irremote \n' +
        'pulsein = pulseio.PulseIn(board.REMOTEIN, maxlen=120, idle_state=True) \n' +
        'decoder = adafruit_irremote.GenericDecode() \n' +

        'while True: \n' +
        '   pulses = decoder.read_pulses(pulsein) \n' +
        '   print("Heard", len(pulses), "Pulses:", pulses) \n' +
        '   try: \n' +
        '       code = decoder.decode_bits(pulses, debug=False) \n' +
        '       print("Decoded:", code) \n' +
        '   except adafruit_irremote.IRNECRepeatException:  # unusual short code! \n' +
        '       print("NEC repeat!") \n' +
        '   except adafruit_irremote.IRDecodeException as e:     # failed to decode \n' +
        '       print("Failed to decode: ", e.args) \n' +

        '   print("----------------------------")';
        return code;
    };
}
