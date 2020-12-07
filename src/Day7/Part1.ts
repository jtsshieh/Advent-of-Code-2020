import { readInput, splitLines } from '../common/utils';

export const main = () => {
	let colors = new Set();
	const shinyGolds: string[] = [];
	const rules = new Map(
		splitLines(readInput(__dirname).trim()).map((rule) => {
			const [parent, children] = rule.split('contain');

			const parsedChildren = children
				.substring(0, children.length - 1)
				.split(',')
				.map((child) => child.replace('bags', '').replace('bag', '').trim());
			for (const child of parsedChildren) {
				if (child.substring(1).trim() == 'shiny gold')
					shinyGolds.push(parent.replace('bags', '').trim());
			}
			return [parent.replace('bags', '').trim(), parsedChildren];
		})
	);

	const getParents = (key: string) => {
		let parents: string[] = [];
		for (const [parent, children] of rules) {
			for (const child of children) {
				if (child.substring(1).trim() == key) {
					if (!parents.includes(parent)) parents.push(parent);
					parents = parents.concat(getParents(parent));
				}
			}
		}
		return parents;
	};

	for (const shinyGold of shinyGolds) {
		colors.add(shinyGold);
		getParents(shinyGold).forEach((i) => colors.add(i));
	}
	return colors.size;
};

export default () => {
	console.log('Bags:', main());
};
