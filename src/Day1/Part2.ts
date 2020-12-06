import { splitLines, readInput } from '../common/utils';

export const main = () => {
	const nums = splitLines(readInput(__dirname)).map(Number);

	for (const num1 of nums) {
		for (const num2 of nums) {
			if (nums.includes(2020 - (num1 + num2))) {
				return num1 * num2 * (2020 - (num1 + num2));
			}
		}
	}
};

export default () => {
	console.log('Product of 3 Expenses that sum to 2020:', main());
};
