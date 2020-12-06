import { splitLines, readInput } from '../common/utils';

export const main = () => {
	const nums = splitLines(readInput(__dirname)).map(Number);

	for (const num1 of nums) {
		if (nums.includes(2020 - num1)) {
			return num1 * (2020 - num1);
		}
	}
};

export default () => {
	console.log('Product of 2 Expenses that sum to 2020:', main());
};
