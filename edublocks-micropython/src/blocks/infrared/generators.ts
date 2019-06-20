export default function define(Python: Blockly.BlockGenerators) {
    Python['using_ir_remote'] = function (block) {
        let branch = Blockly.Python.statementToCode(block, 'DO');
        branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
        const _pin = block.getFieldValue('pin');
        const code = 
    'class Remote: \n' +
	'\tdef __init__(self):\n' +
	'\t\tself.recv = Pin(' + _pin + ', Pin.IN , Pin.PULL_UP)\n' +
	'\t\tself.recv.irq(trigger = Pin.IRQ_RISING|Pin.IRQ_FALLING , handler = self._handler)\n' +
	'\t\tself.buffer = [0 for x in range(100)]\n' +
	'\t\tself.bin = 0\n' +
	'\t\tself.length = 0\n' +
	'\t\tself.prev_irq = 0\n' +
	'\n' +
	'\tdef _handler(self , source):\n' +
	'\t\tself.time = ticks_us()\n' +
	'\t\tif self.prev_irq == 0:\n' +
	'\t\t\tself.prev_irq = self.time\n' +
	'\t\t\tself.length = 0\n' +
	'\t\t\treturn\n' +
	'\t\tself.buffer[self.length] = ticks_diff(self.time , self.prev_irq)\n' +
	'\t\tself.prev_irq = self.time\n' +
	'\t\tself.length += 1\n' +
	'\n' +
	'\tdef _routine(self):\n' +
    '\t\twhile True :\n' +
	'\t\t\tsleep_ms(200)\n' +
	'\t\t\tif ticks_diff(ticks_us(),self.prev_irq) > 200000 and self.length > 0 :\n' +
	'\t\t\t\tprint("DECODED = [{},{}] ".format(self.decode()[1],self.length))\n' +
    '\n' +
	'\t\t\t\tself.length = 0\n' +
	'\t\t\t\tself.prev_irq = 0\n' +
	'\t\t\t\tfor x in range(len(self.buffer)):\n' +
    '\t\t\t\t\tself.buffer[x] = 0\n' + 
    '\t\t\t\t' + branch +
	'\n' +
	'\tdef decode(self):\n' +
	'\t\tself.bin = 0\n' +
	'\t\tm = 50000\n' +
	'\t\tfor x in range(self.length):\n' +
	'\t\t\tm = min(self.buffer[x],m)\n' +
	'\t\tfor x in range(0,self.length,2):\n' +
	'\t\t\tif self.buffer[x+1] > m*3 and self.buffer[x] > m*3:\n' +
	'\t\t\t\tcontinue\n' +
	'\t\t\tif self.buffer[x+1] > self.buffer[x]*3//2 :\n' +
	'\t\t\t\tself.bin += 2**(x//2)\n' +
	'\t\t\telse :\n' +
	'\t\t\t\tpass\n' +
	'\t\t\treturn hex(self.bin) , bin(self.bin)\n' +
	'\n' +
    'remote = Remote()\n' +
    'remote._routine()';

        return code;
    };
}
