import { readInput, splitLines } from '../common/utils';

export const main = () => {
	const numbers = splitLines(readInput(__dirname).trim()).map(Number);
	const stack: number[] = [];

	for (const number of numbers) {
		if (stack.length < 25) {
			stack.push(number);
		} else {
			let found;
			for (const num of stack) {
				if (stack.includes(number - num)) found = true;
			}
			stack.push(number);
			stack.shift();
			if (!found) return number;
		}
	}
};

export default () => {
	console.log('First Number:', main());
};
