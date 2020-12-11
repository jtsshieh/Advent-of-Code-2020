import { readInput, splitLines } from '../common/utils';

export const main = () => {
	const adapters = splitLines(readInput(__dirname).trim()).map(Number);
	adapters.push(0, Math.max(...adapters) + 3);
	adapters.sort((a, b) => a - b);

	const isValid = (chain: number[]) => {
		for (let i = 0; i < chain.length - 1; i++) {
			const diff = chain[i + 1] - chain[i];
			if (!(diff <= 3)) return false;
		}
		return true;
	};

	let loopOneLevel = (chain: number[]) => {
		let total = 0;
		for (let i = 0; i < chain.length; i++) {
			const newArr = [
				...chain.slice(0, i - 1),
				...chain.slice(i, chain.length - 1),
			];
			if (isValid(newArr)) {
				total += loopOneLevel(newArr) + 1;
			}
		}
		return total;
	};

	return loopOneLevel(adapters);
};

export default () => {
	console.log('Total amount of ways:', main());
};
