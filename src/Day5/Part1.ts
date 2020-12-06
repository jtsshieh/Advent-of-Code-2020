import { readInput, splitLines } from '../common/utils';

export const main = () => {
	const seats = splitLines(readInput(__dirname));

	let highest = 0;

	for (const seat of seats) {
		const row = seat.substring(0, 7);
		const col = seat.substring(7);

		let lowRow = 0;
		let highRow = 127;

		for (const char of row) {
			const half = Math.ceil((highRow - lowRow) / 2);
			if (char == 'F') {
				highRow -= half;
			} else {
				lowRow += half;
			}
		}

		let lowColumn = 0;
		let highColumn = 7;

		for (const char of col) {
			const half = Math.ceil((highColumn - lowColumn) / 2);
			if (char == 'L') {
				highColumn -= half;
			} else {
				lowColumn += half;
			}
		}

		if (lowRow != highRow) console.error(':(');
		if (lowColumn != highColumn) console.error(':(');

		if (lowRow * 8 + lowColumn > highest) highest = lowRow * 8 + lowColumn;
	}
	return highest;
};

export default () => {
	console.log('Highest Seat ID:', main());
};
