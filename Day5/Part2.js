const { readInput, splitLines } = require('../common/utils');

const seats = splitLines(readInput());
const takenSeats = [];
const allSeats = [];

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

	if (takenSeats[lowRow] == undefined) {
		takenSeats[lowRow] = [];
	}
	takenSeats[lowRow][lowColumn] = true;

	allSeats.push(lowRow * 8 + lowColumn);
}

for (let row = 0; row < takenSeats.length; row++) {
	if (takenSeats[row] == undefined) continue;
	for (let col = 0; col < takenSeats[row].length; col++) {
		if (
			takenSeats[row][col] == undefined &&
			allSeats.includes(row * 8 + col + 1) &&
			allSeats.includes(row * 8 + col - 1)
		) {
			console.log('Your Seat ID:', row * 8 + col);
		}
	}
}
