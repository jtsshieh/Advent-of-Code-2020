import { splitLines, readInput } from '../common/utils';

export const main = () => {
	const entries = splitLines(readInput(__dirname)).map((row) => row.split(''));

	let column = 0;

	let trees = 0;
	for (const row of entries) {
		if (row.length < column + 1) column = column - row.length;

		if (row[column] == '#') trees++;

		column += 3;
	}

	return trees;
};

export default () => {
	console.log('Trees:', main());
};
