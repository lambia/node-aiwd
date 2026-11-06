// Splash screen. "\n" per lasciare una riga vuota
console.log("Benvenuto in JSCalc v. 0.2\n");

// Lista delle operazioni valide
const operazioniConsentite = ["add", "subtract", "multiply", "divide"];

// Recupero gli argomenti
const argomenti = process.argv;
// console.log(argomenti);

// Preparo le variabili
const operazioneRichiesta = argomenti[2];
const a = Number(argomenti[3]);
const b = Number(argomenti[4]);

// Se i numeri non sono numeri o l'operazione richiesta non è tra quelle disponibili
if (isNaN(a) || isNaN(b) || !operazioniConsentite.includes(operazioneRichiesta)) {
	console.log("Usage: node main.js <operation> <number> <number>");
	console.log("Operations: add, subtract, multiply or divide");
	return;
}

// Calcolo il risultato...
let risultato = 0;
// ...in base all'operazione richiesta
if (operazioneRichiesta == "add") {
	risultato = a + b;
} else if (operazioneRichiesta == "subtract") {
	risultato = a - b;
} else if (operazioneRichiesta == "multiply") {
	risultato = a * b;
} else if (operazioneRichiesta == "divide") {
	risultato = a / b;
}

console.log(`Requested "${operazioneRichiesta}" for ${a} and ${b}`);
console.log(`Result: ${risultato}`);