import { readInput, splitLines } from '../common/utils';

export const main = () => {
	const adapters = splitLines(readInput(__dirname).trim()).map(Number);

	const numberSort = (a: number, b: number) => a - b;

	const sorted = [0, ...adapters.sort(numberSort)];
	sorted.push(sorted[sorted.length - 1] + 3);

	const diffMap = new Map();
	for (let i = 0; i < sorted.length - 1; i++) {
		const diff = sorted[i + 1] - sorted[i];
		diffMap.set(diff, diffMap.get(diff) ? diffMap.get(diff) + 1 : 1);
	}

	return diffMap.get(1) * diffMap.get(3);
};

export default () => {
	console.log('Jolt difference Product:', main());
};
