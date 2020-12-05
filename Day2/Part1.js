const { splitLines, readInput } = require('../common/utils');

const entries = splitLines(readInput());

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
