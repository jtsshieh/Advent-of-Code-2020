import { main } from './Part1';

test('the multiplied result of two entries that sum to 2020', () => {
	expect(main()).toBe(299299);
});
