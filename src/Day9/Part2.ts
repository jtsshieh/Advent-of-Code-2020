import { readInput, splitLines } from '../common/utils';
import { main as part1 } from './Part1';

export const main = () => {
	const numbers = splitLines(readInput(__dirname).trim()).map(Number);
	const weakNumber: number = part1() as number;
	const stack: number[] = [];

	for (const number of numbers) {
		stack.push(number);
		let stackSum = stack.reduce((acc, prev) => acc + prev);
		while (stackSum > weakNumber) {
			stack.shift();
			stackSum = stack.reduce((acc, prev) => acc + prev);
		}
		if (stackSum == weakNumber) {
			const sorted = stack.sort((a, b) => a - b);
			return sorted[0] + sorted[sorted.length - 1];
		}
	}
};

export default () => {
	console.log('Encryption Weakness:', main());
};
