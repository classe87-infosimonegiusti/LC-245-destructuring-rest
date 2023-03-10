/*
    Crea un array di oggetti che rappresentano delle persone. Ogni persona ha un nome, un cognome e un’età.
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/


const persone = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 50
    },
    {
        nome: 'Valentina',
        cognome: 'Verdi',
        eta: 30
    },
    {
        nome: 'Pippo',
        cognome: 'Neri',
        eta: 15
    }
];

//const risultato = ['Mario Rossi può guidare', 'Valentina Verdi puo guidare', 'Pippo Neri non puo guidare'];

const risultato = [];

persone.forEach(elemento => {
    if (elemento.eta >= 18) {
        risultato.push(`${elemento.nome} ${elemento.cognome} può guidare`);
    } else {
        risultato.push(`${elemento.nome} ${elemento.cognome} NON può guidare`);
    }
});

console.log(risultato);


/*
const risultato = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 50,
        puo_guidare: true
    },
    {
        nome: 'Valentina',
        cognome: 'Verdi',
        eta: 30,
        puo_guidare: true
    },
    {
        nome: 'Pippo',
        cognome: 'Neri',
        eta: 15,
        puo_guidare: false
    }
];
*/

const risultatoArrayOggetti = [...persone];

risultatoArrayOggetti.forEach(elemento => {
    elemento.puo_guidare = elemento.eta>=18?true:false;
});

console.log(risultatoArrayOggetti);
//console.log(persone);