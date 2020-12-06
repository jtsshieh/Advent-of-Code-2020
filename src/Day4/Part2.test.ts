import { main } from './Part2';

test('valid passports', () => {
	expect(main()).toBe(103);
});
