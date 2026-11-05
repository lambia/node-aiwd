console.log("Benvenuto in JSCose v. 0.1");


const argomenti = process.argv;

// console.log(argomenti);

// const operazione = argomenti[2];
const a = Number(argomenti[2]);
const b = Number(argomenti[3]);

if (isNaN(a) || isNaN(b)) {
	console.log("Questi non sono numeri!");
	return;
}

const risultato = a + b;

console.log(`${a} + ${b} = ${risultato}`);