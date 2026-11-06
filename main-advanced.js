// Splash screen. "\n" per lasciare una riga vuota
console.log("Benvenuto in JSCalc v. 0.2\n");

// Creo un oggetto con 4 proprietà: "+", "-", "*" e "/"
// Ogni proprietà è una funzione. Quindi posso usare:
// operazioniDisponibili.multiplay(2, 3);
const operazioniDisponibili = {
	add: function (a, b) { return a + b },
	subtract: function (a, b) { return a - b },
	multiply: function (a, b) { return a * b },
	divide: function (a, b) { return a / b },
}

// Recupero gli argomenti
const argomenti = process.argv;
// console.log(argomenti);
const operazioneRichiesta = argomenti[2];
const a = Number(argomenti[3]);
const b = Number(argomenti[4]);

// Leggo l'oggetto con le funzioni, all'indice "operazione richiesta"
// è una funzione, quindi posso invocarla con operazione()
const operazione = operazioniDisponibili[operazioneRichiesta];

// Se i numeri non sono numeri o l'operazione non è nell'oggetto
if (isNaN(a) || isNaN(b) || !operazione) {
	console.log("Usage: node main.js <operation> <number> <number>");
	console.log("Operations: add, subtract, multiply or divide");
	return;
}

// Eseguo
const risultato = operazione(a, b);

console.log(`Requested "${operazioneRichiesta}" for ${a} and ${b}`);
console.log(`Result: ${risultato}`);