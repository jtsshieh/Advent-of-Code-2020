import { splitLines, readInput } from '../common/utils.js';

const entries = splitLines(readInput(import.meta.url));

let valid = 0;

for (const entry of entries) {
	const [policy, policyLetter, password] = entry.split(' ');
	const [lowerBound, upperBound] = policy.split('-').map(Number);
	const letter = policyLetter.slice(0, 1);

	const passwordLetters = password.split('');
	let current = 0;

	for (const passwordLetter of passwordLetters) {
		if (passwordLetter == letter) current++;
	}

	if (lowerBound <= current && current <= upperBound) valid++;
}

console.log('Valid Passwords', valid);
