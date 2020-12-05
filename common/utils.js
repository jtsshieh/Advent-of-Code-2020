module.exports.readInput = () => {
	const fs = require('fs');

	return fs.readFileSync('./input.txt', { encoding: 'utf-8' });
};

module.exports.splitLines = (input) => {
	return input.split('\r\n');
};
