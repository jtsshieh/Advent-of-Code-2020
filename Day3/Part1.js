import { splitLines, readInput } from '../common/utils.js';

const entries = splitLines(readInput(import.meta.url)).map((row) =>
	row.split('')
);

let column = 0;

let trees = 0;
for (const row of entries) {
	if (row.length < column + 1) column = column - row.length;

	if (row[column] == '#') trees++;

	column += 3;
}

console.log('Trees:', trees);
