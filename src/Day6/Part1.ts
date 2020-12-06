import { readInput } from '../common/utils';

export const main = () => {
	const groups = readInput(__dirname).split('\r\n\r\n');

	return groups.reduce((cur, group) => {
		const questionsAnswered = new Set();
		[...group.replace(/\r\n/g, '')].forEach((q) => questionsAnswered.add(q));
		return cur + questionsAnswered.size;
	}, 0);
};

export default () => {
	console.log('Total Questions Answered:', main());
};
