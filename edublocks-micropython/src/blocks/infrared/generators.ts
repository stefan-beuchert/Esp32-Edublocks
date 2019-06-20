export default function define(Python: Blockly.BlockGenerators) {
    Python['using_ir_remote'] = function (block) {
        let branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        const _pin = block.getFieldValue('pin');
        const code = 
    'class Remote: \n' +
	'  def __init__(self):\n' +
	'    self.recv = Pin(' + _pin + ', Pin.IN , Pin.PULL_UP)\n' +
	'    self.recv.irq(trigger = Pin.IRQ_RISING|Pin.IRQ_FALLING , handler = self._handler)\n' +
	'    self.buffer = [0 for x in range(100)]\n' +
	'    self.bin = 0\n' +
	'    self.length = 0\n' +
	'    self.prev_irq = 0\n' +
	'\n' +
	'  def _handler(self , source):\n' +
	'    self.time = ticks_us()\n' +
	'    if self.prev_irq == 0:\n' +
	'      self.prev_irq = self.time\n' +
	'      self.length = 0\n' +
	'      return\n' +
	'    self.buffer[self.length] = ticks_diff(self.time , self.prev_irq)\n' +
	'    self.prev_irq = self.time\n' +
	'    self.length += 1\n' +
	'\n' +
	'  def _routine(self):\n' +
    '    while True :\n' +
	'      sleep_ms(200)\n' +
	'      if ticks_diff(ticks_us(),self.prev_irq) > 200000 and self.length > 0 :\n' +
	'        print("DECODED = [{},{}] ".format(self.decode()[1],self.length))\n' +
    '\n' +
	'        self.length = 0\n' +
	'        self.prev_irq = 0\n' +
	'        for x in range(len(self.buffer)):\n' +
    '          self.buffer[x] = 0\n' + 
    `      ${branch}\n` +
	'\n' +
	'  def decode(self):\n' +
	'    self.bin = 0\n' +
	'    m = 50000\n' +
	'    for x in range(self.length):\n' +
	'      m = min(self.buffer[x],m)\n' +
	'    for x in range(0,self.length,2):\n' +
	'      if self.buffer[x+1] > m*3 and self.buffer[x] > m*3:\n' +
	'        continue\n' +
	'      if self.buffer[x+1] > self.buffer[x]*3//2 :\n' +
	'        self.bin += 2**(x//2)\n' +
	'      else :\n' +
	'        pass\n' +
	'    return hex(self.bin) , bin(self.bin)\n' +
	'\n' +
    'remote = Remote()\n' +
    'remote._routine()';

        return code;
    };
}
