import fs from 'fs';
import path from 'path';

export const readInput = (base: string) => {
	return fs.readFileSync(path.join(base, 'input.txt'), {
		encoding: 'utf-8',
	});
};

export const splitLines = (input: string) => {
	return input.split('\r\n');
};
