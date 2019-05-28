export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['importgpiozero'] = {
    init() {
      this.appendDummyInput()
        .appendField('from gpiozero import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('Import the gpiozero library');
      this.setHelpUrl('http://gpiozero.readthedocs.io');
    },
  };

  Blocks['importtime'] = {
    init() {
      this.appendDummyInput()
        .appendField('from datetime import time');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('Import the datetime library');
      this.setHelpUrl('http://gpiozero.readthedocs.io');
    },
  };

  Blocks['buttonset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField(' = Button(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };



  Blocks['lineset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'sensor')
        .appendField(' = LineSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Setup a line sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['motionset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'pir')
        .appendField(' = MotionSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a MotionSensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#motion-sensor-d-sun-pir');
    },
  };

  Blocks['lightset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'ldr')
        .appendField(' = LightSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a Light Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['distanceset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'distance')
        .appendField(' = DistanceSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a Distance Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#distance-sensor-hc-sr04');
    },
  };

  Blocks['ledset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('led'), 'led')
        .appendField(' = LED(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
    },
  };

  Blocks['pledset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pwm'), 'pwm')
        .appendField(' = PWMLED(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an PWMLED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
    },
  };

  Blocks['rgbledset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('rgb'), 'rgb')
        .appendField(' = RGBLED(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an RGB LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled');
    },
  };

  Blocks['buzzerset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buzzer'), 'buzzer')
        .appendField(' = Buzzer(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an Buzzer');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
    },
  };

  Blocks['motorset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('motor'), 'motor')
        .appendField(' = Motor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Motor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#motor');
    },
  };

  Blocks['servoset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('servo'), 'servo')
        .appendField(' = Servo(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
    },
  };

  Blocks['angset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('angular'), 'angular')
        .appendField(' = AngularServo(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an Angular Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo');
    },
  };

  Blocks['ledbset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('leds'), 'leds')
        .appendField(' = LEDBoard(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an LED Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard');
    },
  };

  Blocks['graphset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('graph'), 'leds')
        .appendField(' = LEDBarGraph(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an LED Bar Graph');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph');
    },
  };

  Blocks['buttonbset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buttonb'), 'buttonb')
        .appendField(' = ButtonBoard(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for a Button Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard');
    },
  };

  Blocks['buttonaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_press', 'wait_for_press'], ['wait_for_release', 'wait_for_release']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['lineaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'sensor')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_line', 'wait_for_line'], ['wait_for_no_line', 'wait_for_no_line']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'sense')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a Line Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };


  Blocks['motionaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'pir')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_motion', 'wait_for_motion'], ['wait_for_no_motion', 'wait_for_no_motion']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a motion sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['lightaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'ldr')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_dark', 'wait_for_dark'], ['wait_for_light', 'wait_for_light']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a light sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['distanceaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'distance')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_in_range', 'wait_for_in_range'], ['wait_for_out_of_range', 'wait_for_out_of_range']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a distance sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['ledaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('led'), 'led')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
    },
  };

  Blocks['pledaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pwm'), 'pwm')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['toggle', 'toggle'], ['pulse', 'pulse']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an PWM LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
    },
  };

  Blocks['rgbledaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('rgb'), 'rgb')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['toggle', 'toggle'], ['pulse', 'pulse'], ['color', 'color']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an RGB LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled');
    },
  };

  Blocks['buzzeraction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buzzer'), 'buzzer')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['beep', 'beep'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Buzzer');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
    },
  };

  Blocks['motoraction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('motor'), 'motor')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['forward', 'forward'], ['backward', 'backward'], ['stop', 'stop']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Motor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#motor');
    },
  };

  Blocks['servoaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('servo'), 'servo')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['detach', 'detach'], ['max', 'max'], ['mid', 'mid'], ['min', 'min'], ['angle', 'angle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
    },
  };

  Blocks['angaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('angular'), 'angular')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['detach', 'detach'], ['max', 'max'], ['mid', 'mid'], ['min', 'min'], ['angle', 'angle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an Angular Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo');
    },
  };

  Blocks['ledbaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('leds'), 'leds')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['blink', 'blink'], ['close', 'close'], ['on', 'off'], ['pulse', 'pulse'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an LED Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard');
    },
  };

  Blocks['graphaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('graph'), 'graph')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an LED Bar Graph');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph');
    },
  };

  Blocks['buttonbaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buttonb'), 'buttonb')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_active', 'wait_for_active'], ['wait_for_inactive', 'wait_for_inactive'], ['wait_for_press', 'wait_for_press'], ['wait_for_release', 'wait_for_release']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for a Button Baord');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard');
    },
  };


  Blocks['buttonvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['linevar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'sensor')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'first')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'second');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['motionvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'pir')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a motion sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };



  Blocks['lightvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'ldr')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a light sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };


  Blocks['distancevar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'disance')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a Distance sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['ledvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('led'), 'led')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
    },
  };

  Blocks['pledvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pwm'), 'pwm')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an PWMLED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
    },
  };

  Blocks['rgbledvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('rgb'), 'rgb')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an RGB LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled');
    },
  };

  Blocks['buzzervar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buzzer'), 'buzzer')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an Buzzer');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
    },
  };

  Blocks['motorvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('motor'), 'motor')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for a Motor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#motor');
    },
  };

  Blocks['servovar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('servo'), 'servo')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for a Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
    },
  };

  Blocks['angvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('angular'), 'angular')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an Angular Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo');
    },
  };

  Blocks['ledbvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('leds'), 'leds')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set an action variable for an LED Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard');
    },
  };

  Blocks['graphvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('graph'), 'graph')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set an action variable for an LED Bar Graph');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph');
    },
  };

  Blocks['buttonbvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buttonb'), 'buttonb')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set an action variable for a Button Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard');
    },
  };

  Blocks['trafficset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('traffic'), 'traffic')
        .appendField(' = TrafficLights(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for a Traffic Light');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#trafficlights');
    },
  };

  Blocks['trafficaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('traffic'), 'traffic')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['red', 'red'], ['amber', 'amber'], ['green', 'green']]), 'colour')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['pulse', 'pulse'], ['toggle', 'toggle']]), 'action')
        .appendField('()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Setup a Traffic Light');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#trafficlights');
    },
  };

  Blocks['trafficvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('traffic'), 'traffic')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set an action variable for a Traffic Light');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#trafficlights');
    },
  };

  Blocks['pingset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('server'), 'server')
        .appendField(' = PingServer(')
        .appendField(new Blockly.FieldTextInput('www'), 'www')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
      this.setTooltip('Set a variable for a Ping Server');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_other.html#pingserver');
    },
  };

  Blocks['energenieset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('lamp'), 'lamp')
        .appendField(' = Energenie(')
        .appendField(new Blockly.FieldTextInput('num'), 'num')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an Energenie');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#energenie');
    },
  };

  Blocks['energenieaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('lamp'), 'lamp')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an Energenie');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#energenie');
    },
  };

  Blocks['energenievar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('lamp'), 'lamp')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set an action variable for an Energenie');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#energenie');
    },
  };

  Blocks['camjamset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('camjam'), 'camjam')
        .appendField(' = CamJamKitRobot()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for a CamJam Kit 3');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#camjam-3-kit-robot');
    },
  };

  Blocks['camjamaction'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('camjam'), 'camjam')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['forward', 'forward'], ['backward', 'backward'], ['left', 'left'], ['right', 'right'], ['reverse', 'reverse'], ['stop', 'stop']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an CamJam Kit 3');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#camjam-3-kit-robot');
    },
  };

  Blocks['camjamvar'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('camjam'), 'camjam')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set an action variable for a CamJam Kit 3');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#camjam-3-kit-robot');
    },
  };

  Blocks['timeset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('morning'), 'morning')
        .appendField(' = TimeOfDay(time(')
        .appendField(new Blockly.FieldTextInput('num'), 'num')
        .appendField('), time(')
        .appendField(new Blockly.FieldTextInput('num'), 'num2')
        .appendField('))');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
      this.setTooltip('Setup Time Of Day');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_other.html#timeofday');
    },
  };

  Blocks['cpuset'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('cpu'), 'cpu')
        .appendField(' = CPUTemperature(min_temp(')
        .appendField(new Blockly.FieldTextInput('num'), 'num')
        .appendField('), max_temp(')
        .appendField(new Blockly.FieldTextInput('num'), 'num2')
        .appendField('))');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
      this.setTooltip('Setup CPU Temp');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_other.html#cputemperature');
    },
  };

  Blocks['adc'] = {
    init() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('var'), 'var')
        .appendField(' = ')
        .appendField(new Blockly.FieldDropdown([['MCP3001', 'MCP3001'], ['MCP3002', 'MCP3002'], ['MCP3004', 'MCP3004'], ['MCP3008', 'MCP3008'], ['MCP3201', 'MCP3201'], ['MCP3202', 'MCP3202'], ['MCP3204', 'MCP3204'], ['MCP3208', 'MCP3208'], ['MCP3302', 'MCP3302'], ['MCP3302', 'MCP3302'], ['MCP3304', 'MCP3304']]), 'NAME')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'channel')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
      this.setTooltip('Setup Analog to Digital Converters');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_spi.html#analog-to-digital-converters-adc');
    },
  };


}
