
function miaFunzione(...argomenti) {
    console.log(argomenti);
}

miaFunzione('Ciao', 55, {'ciccio':'pasticcio'});




let risultato = somma(1,2,3,4,5);

function somma(...valori) {
    let somma = 0;
    for ( let i =0; i < valori.length; i++ ) {
        somma += valori[i];
    }
    return somma;
}
























let risultato2 = somma( [1,2,3,4,5] );




function somma(valori) {

    let somma = 0;

    for ( let i = 0; i < valori.length; i++ ) {
        somma += valori[i];
    }

    return somma;
}










/* recap funzioni e cicli */
/*
const mioArray = [34,22,67,99,100];

function miaFunzioneDiSomma(mioArgomento) {


    let miaSomma = 0;

    for (let i = 0; i < mioArgomento.length; i++) {
        console.log(mioArgomento[i]);

        miaSomma = miaSomma + mioArgomento[i];
    }

}

console.log(miaFunzioneDiSomma(mioArray));
*/