const { splitLines, readInput } = require('../common/utils');

const nums = splitLines(readInput()).map(Number);

for (const num1 of nums) {
	for (const num2 of nums) {
		for (const num3 of nums) {
			if (num1 + num2 + num3 == 2020) {
				console.log('1', num1);
				console.log('2', num2);
				console.log('3', num3);
				console.log(num1 * num2 * num3);
			}
		}
	}
}
