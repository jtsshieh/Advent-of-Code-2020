import { main } from './Part1';

test('valid passports', () => {
	expect(main()).toBe(170);
});
