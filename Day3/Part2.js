const { splitLines, readInput } = require('../common/utils');

const entries = splitLines(readInput()).map((row) => row.split(''));

const calculateTrees = (right, down) => {
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

console.log(
	'Total Trees:',
	calculateTrees(1, 1) *
		calculateTrees(3, 1) *
		calculateTrees(5, 1) *
		calculateTrees(7, 1) *
		calculateTrees(1, 2)
);
