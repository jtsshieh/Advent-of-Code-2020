import { main } from './Part2';

test('the multiplied result of three entries that sum to 2020', () => {
	expect(main()).toBe(287730716);
});
