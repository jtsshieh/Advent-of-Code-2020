import { main } from './Part2';

test('the valid passwords', () => {
	expect(main()).toBe(428);
});
