import { main } from './Part1';

test('total questions answered', () => {
	expect(main()).toBe(6911);
});
