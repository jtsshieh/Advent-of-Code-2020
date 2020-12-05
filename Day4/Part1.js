const { readInput } = require('../common/utils');

const passports = readInput()
	.split('\r\n\r\n')
	.map((passport) => passport.replace(/\r\n/g, ' '));

let validPassports = 0;

for (const passport of passports) {
	const fields = passport.split(' ');
	const remainingFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

	for (const field of fields) {
		const fieldName = field.split(':')[0];
		const el = remainingFields.indexOf(fieldName);
		if (el != -1) remainingFields.splice(el, 1);
	}

	if (remainingFields.length == 0) validPassports++;
}

console.log('Valid Passports:', validPassports);
