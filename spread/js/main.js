
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




















let numero = 10;
let secondoNumero = numero;

numero = 15;

console.log(numero);
console.log(secondoNumero);







let provaOggetto = {
    nome: 'pippo',
    cognome: 'pluto'
};

let copiaFarloccaOggetto = provaOggetto;

let copiaVeraOggetto = {...provaOggetto};


console.log(provaOggetto);
console.log(copiaFarloccaOggetto);

provaOggetto.nome = "paperino";

console.log(provaOggetto);
console.log(copiaFarloccaOggetto);










