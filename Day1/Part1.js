import { splitLines, readInput } from '../common/utils.js';

const nums = splitLines(readInput(import.meta.url)).map(Number);
let result;

for (const num1 of nums) {
	if (nums.includes(2020 - num1)) {
		result = num1 * (2020 - num1);
		break;
	}
}

console.log('Largest Expense:', result);
