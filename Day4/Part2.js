import { readInput } from '../common/utils.js';

const passports = readInput(import.meta.url)
	.split('\r\n\r\n')
	.map((passport) => passport.replace(/\r\n/g, ' '));

let validPassports = 0;

for (const passport of passports) {
	const fields = passport.split(' ');
	const remainingFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

	for (const field of fields) {
		const fieldName = field.split(':')[0];
		const fieldVal = field.split(':')[1];
		const el = remainingFields.indexOf(fieldName);
		if (el != -1) {
			let valid = false;
			switch (fieldName) {
				case 'byr': {
					if (Number(fieldVal) >= 1920 && Number(fieldVal) <= 2002)
						valid = true;
					break;
				}

				case 'iyr': {
					if (Number(fieldVal) >= 2010 && Number(fieldVal) <= 2020)
						valid = true;
					break;
				}
				case 'eyr': {
					if (Number(fieldVal) >= 2020 && Number(fieldVal) <= 2030)
						valid = true;
					break;
				}
				case 'hgt': {
					if (fieldVal.endsWith('cm')) {
						const amt = Number(fieldVal.replace('cm', ''));
						if (amt >= 150 && amt <= 193) valid = true;
					} else if (fieldVal.endsWith('in')) {
						const amt = Number(fieldVal.replace('in', ''));
						if (amt >= 59 && amt <= 76) valid = true;
					}
					break;
				}
				case 'hcl': {
					if (fieldVal.startsWith('#')) {
						const hex = fieldVal.substring(1);
						if (hex.length == 6) {
							for (const char of hex) {
								const allowed = [
									'0',
									'1',
									'2',
									'3',
									'4',
									'5',
									'6',
									'7',
									'8',
									'9',
									'a',
									'b',
									'c',
									'd',
									'e',
									'f',
								];
								if (allowed.includes(char)) valid = true;
							}
						}
					}
					break;
				}
				case 'ecl': {
					if (
						['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(fieldVal)
					)
						valid = true;
					break;
				}
				case 'pid': {
					if (fieldVal.length == 9)
						for (const char of fieldVal) {
							if (
								['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(
									char
								)
							)
								valid = true;
						}
					break;
				}
			}

			if (valid) remainingFields.splice(el, 1);
		}
	}

	if (remainingFields.length == 0) validPassports++;
}

console.log('Valid Passports:', validPassports);
