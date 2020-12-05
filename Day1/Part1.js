import { splitLines, readInput } from '../common/utils.js';

const nums = splitLines(readInput(import.meta.url)).map(Number);
let result;

for (const num1 of nums) {
	for (const num2 of nums) {
		if (num1 + num2 == 2020) {
			result = num1 * num2;
		}
	}
}

console.log('Largest Expense:', result);
