import { splitLines, readInput } from '../common/utils.js';

const entries = splitLines(readInput(import.meta.url));

let valid = 0;

for (const entry of entries) {
	const [policy, policyLetter, password] = entry.split(' ');
	const [position1, position2] = policy.split('-').map(Number);
	const letter = policyLetter.slice(0, 1);

	const passwordLetters = password.split('');

	if (
		passwordLetters[position1 - 1] == letter &&
		passwordLetters[position2 - 1] != letter &&
		passwordLetters[position2 - 1] != undefined
	) {
		valid++;
	} else if (
		passwordLetters[position1 - 1] != letter &&
		passwordLetters[position1 - 1] != undefined &&
		passwordLetters[position2 - 1] == letter
	) {
		valid++;
	}
}

console.log('Valid Passwords', valid);
