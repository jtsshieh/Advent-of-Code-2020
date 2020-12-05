import fs from 'fs';
export function readInput(url) {
	return fs.readFileSync(new URL('./input.txt', url), {
		encoding: 'utf-8',
	});
}

export function splitLines(input) {
	return input.split('\r\n');
}
