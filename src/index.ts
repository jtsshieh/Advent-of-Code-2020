import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Which day would you like to run? ', (day) => {
	rl.question('Which part would you like to run? ', (part) => {
		console.log();
		import(`./Day${day}/Part${part}.ts`)
			.then((mod) => {
				mod.default();
			})
			.catch((err) => console.log('An error occurred:', err));

		rl.close();
	});
});
