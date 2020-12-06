import { splitLines, readInput } from '../common/utils';

export const main = () => {
	const entries = splitLines(readInput(__dirname));

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
	return valid;
};

export default () => {
	console.log('Valid Passwords', main());
};
