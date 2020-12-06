import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Which day would you like to run? ', (day) => {
	rl.question('Which part would you like to run? ', (part) => {
		console.log();
		import(`./Day${day}/Part${part}.ts`)
			.catch(() => console.log('This is not a valid selection.'))
			.then((mod) => {
				mod.default();
				process.exit();
			});
	});
});
