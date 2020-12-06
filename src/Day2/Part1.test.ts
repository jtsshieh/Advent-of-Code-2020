import { main } from './Part1';

test('the valid passwords', () => {
	expect(main()).toBe(396);
});
