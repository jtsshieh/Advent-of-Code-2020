import { main } from './Part2';

test('total questions answered', () => {
	expect(main()).toBe(3473);
});
