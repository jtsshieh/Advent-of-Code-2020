const { splitLines, readInput } = require('../common/utils');

const entries = splitLines(readInput()).map((row) => row.split(''));

let column = 0;

let trees = 0;
for (const row of entries) {
	if (row.length < column + 1) column = column - row.length;

	console.log(column);
	if (row[column] == '#') trees++;

	column += 3;
}

console.log('Trees:', trees);
