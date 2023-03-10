
const mioOggetto = {
    'marca': 'Fiat',
    'modello': '500',
    'colore auto': 'giallo'
};

/* approccio tradizionale */
//const marca = mioOggetto.marca;
//const modello = mioOggetto.modello;
//const colore = mioOggetto.colore;

const {marca, modello, 'colore auto':colore} = mioOggetto; //equivalente al codice commentato di sopra

console.log(marca, modello, colore);