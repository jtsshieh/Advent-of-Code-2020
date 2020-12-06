import { splitLines, readInput } from '../common/utils';

export const main = () => {
	const entries = splitLines(readInput(__dirname)).map((row) => row.split(''));

	const calculateTrees = (right: number, down: number) => {
		let columnIndex = 0;
		let rowIndex = 0;

		let trees = 0;
		while (rowIndex < entries.length) {
			const row = entries[rowIndex];
			if (row.length < columnIndex + 1) columnIndex = columnIndex - row.length;

			if (row[columnIndex] == '#') trees++;

			columnIndex += right;
			rowIndex += down;
		}

		return trees;
	};

	return (
		calculateTrees(1, 1) *
		calculateTrees(3, 1) *
		calculateTrees(5, 1) *
		calculateTrees(7, 1) *
		calculateTrees(1, 2)
	);
};

export default () => {
	console.log('Total Trees:', main());
};
