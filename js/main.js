// Il programma dovrà chiedere all’utente 

// il numero di chilometri che vuole percorrere_ok
// l’età del passeggero._ok

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)_ok

// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65.

const numeroKm = parseInt(prompt("Inserisci il numero esatto dei km da percorrere"));

const eta = parseInt(prompt("Inserisci l'età del viaggiatore"));
console.log(eta);

let costoBase = (numeroKm * 0.21);
console.log(costoBase);

const under18 = 18;
const over65 = 65;

let costoEffettivo;

if (eta < under18) {
    costoEffettivo = (costoBase * 0.8).toFixed(2);
} else if (eta > over65) {
    costoEffettivo = (costoBase * 0.6).toFixed(2);
} else {
    costoEffettivo = (costoBase).toFixed(2);
}

document.getElementById('costoBiglietto').innerHTML = costoEffettivo + " €";
console.log(costoEffettivo);








