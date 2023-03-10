//agevolazioni es6
const nome = "Mario";
const cognome = "Rossi";

/* sintassi < es6 */
const persona = {
    "nome": nome,
    "cognome": cognome
};

console.log(persona);

const personaEs6 = {
    nome, 
    cognome
};

console.log(personaEs6);


// nome della chiave dinamica
const nomeChiave = "eta";

const personaConEta = {
    nome: 'Mario',
    cognome: 'Rossi',
    [nomeChiave]: '26'
};

console.log(personaConEta);