import { readInput, splitLines } from '../common/utils';

export const main = () => {
	const rules = new Map(
		splitLines(readInput(__dirname).trim()).map((rule) => {
			const [parent, children] = rule.split('contain');

			const parsedChildren = children
				.substring(0, children.length - 1)
				.split(',')
				.map((child) => child.replace('bags', '').replace('bag', '').trim());
			return [parent.replace('bags', '').trim(), parsedChildren];
		})
	);

	const getChildren = (parent: string) => {
		let total = 1;
		for (const child of rules.get(parent)!) {
			if (child.substring(2).trim() != 'other') {
				const amount = Number(child.substring(0, 1));
				total += amount * getChildren(child.substring(1).trim());
			}
		}
		return total;
	};

	return getChildren('shiny gold') - 1;
};

export default () => {
	console.log('Bags:', main());
};
