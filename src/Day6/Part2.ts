import { readInput } from '../common/utils';

export const main = () => {
	const groups = readInput(__dirname).split('\r\n\r\n');

	return groups.reduce((total, group) => {
		return (
			total +
			group.split('\r\n').reduce((acc, cur) => {
				return [...acc].filter((item) => cur.includes(item)).join('');
			}).length
		);
	}, 0);
};

export default () => {
	console.log('Total Questions Answered:', main());
};
