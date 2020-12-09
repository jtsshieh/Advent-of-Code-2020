import { main } from './Part2';

test('encryption weakness', () => {
	expect(main()).toBe(2980044);
});
