import { readInput, splitLines } from '../common/utils';

export const main = () => {
	const instructions = splitLines(readInput(__dirname));
	const instructionStack = new Set();
	let acc = 0;

	let cur = 0;
	const processCurInstruction = () => {
		const line = instructions[cur];
		const [instruction, modifier] = line.split(' ');

		if (instruction == 'nop') {
			cur++;
		} else if (instruction == 'acc') {
			if (modifier.startsWith('+')) {
				acc += Number(modifier.substring(1));
			} else if (modifier.startsWith('-')) {
				acc -= Number(modifier.substring(1));
			}
			cur++;
		} else if (instruction == 'jmp') {
			if (modifier.startsWith('+')) {
				cur += Number(modifier.substring(1));
			} else if (modifier.startsWith('-')) {
				cur -= Number(modifier.substring(1));
			}
		}

		if (!instructionStack.has(cur)) {
			instructionStack.add(cur);
			processCurInstruction();
		}
	};

	processCurInstruction();

	return acc;
};

export default () => {
	console.log('Accumulator:', main());
};
