export default function define(Python: Blockly.BlockGenerators) {

	Python['class'] = function(block){
		const className = block.getFieldValue('className');
		let branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const code = 'class ' + className + ':\n' + branch;
		return code;
	};

	Python['using_remote'] = function(block){
		const className = block.getFieldValue('className');
		const code = 'remote = ' + className + '()\n' + 
		'remote._routine()\n';
		return code;
	};

	Python['__init__'] = function (block) {
		const pin = block.getFieldValue('pin');
		const code = 'def __init__(self):\n' +
		'  self.recv = machine.Pin(' + pin + ', machine.Pin.IN , machine.Pin.PULL_UP)\n' +
		'  self.recv.irq(trigger = machine.Pin.IRQ_RISING|machine.Pin.IRQ_FALLING , handler = self._handler)\n' +
		'  self.buffer = [0 for x in range(100)]\n' +
		'  self.bin = 0\n' +
		'  self.length = 0\n' +
		'  self.prev_irq = 0\n' +
		'\n';
		return code;
	};

	Python['handler'] = function (block) {
		const code = 'def _handler(self, source):\n' +
		'  self.time = time.ticks_us()\n' +
		'  if self.prev_irq == 0:\n' +
		'    self.prev_irq = self.time\n' +
		'		 self.length = 0\n' +
		'    return\n' +
		'  self.buffer[self.length] = time.ticks_diff(self.time , self.prev_irq)\n' +
		'  self.prev_irq = self.time\n' +
		'  self.length += 1\n' +
		'\n';
		return code;
	};

	Python['routine'] = function(block){
		let branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
		const code = 'def _routine(self):\n' + branch;
		return code;
	};

	Python['signal_recv'] = function(block){
		const code = 'print("DECODED = [{},{}] ".format(self.decode()[1],self.length))\n' +
		'self.length = 0\n' +
		'self.prev_irq = 0\n' +
		'for x in range(len(self.buffer)):\n' +
		'  self.buffer[x] = 0\n';
		return code;
	};

	Python['decode'] = function (block) {
		const code = 'def decode(self):\n' +
		'  self.bin= 0\n' +
		'  m = 50000\n' +
		'  for x in range(self.length):\n' +
		'    m = min(self.buffer[x], m)\n' +
		'  for x in range(0, self.length, 2):\n' +
		'    if self.buffer[x+1] > m*3 and self.buffer[x] > m*3:\n' +
		'      continue\n' +
		'    if self.buffer[x+1] > self.buffer[x]*3//2:\n' +
		'      self.bin += 2**(x//2)\n' +
		'    else:\n' +
		'      pass\n' +
		'  return hex(self.bin), bin(self.bin)\n';
		return code;
	};
	
}
