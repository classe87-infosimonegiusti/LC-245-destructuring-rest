//caso base di una copia con spread
const persona = {
    nome: 'Mario',
    cognome: 'Rossi'
};


console.log(persona);


const copiaPersonaConEta = {
    ...persona,
    eta: 30
};

console.log(copiaPersonaConEta);



//copia di un valore "semplice". La copia fa quello che mi aspetto

let numero = 10;
let secondoNumero = numero;

numero = 15;

console.log(numero);
console.log(secondoNumero);



//copia con di un oggetto o di un array... potrebbe non succedere quello che mi aspetto. Uso lo spread per gestire le varie implicazioni
let provaOggetto = {
    nome: 'pippo',
    cognome: 'pluto'
};

// la copia in questo caso è per riferimento, in sostanza lavorando sulla variabile "copiata" continuo a modificare lo stesso oggetto
let copiaFarloccaOggetto = provaOggetto; 

// la copia in questo caso è per valore: copio ogni singolo valore contenuto dentro l'oggetto. Modificando l'oggetto originale non cambio quelli copiati.
let copiaVeraOggetto = {...provaOggetto}; 


console.log(provaOggetto);
console.log(copiaFarloccaOggetto);

provaOggetto.nome = "paperino";

console.log(provaOggetto);
console.log(copiaFarloccaOggetto);










