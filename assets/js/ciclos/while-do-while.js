
//Ciclo While
console.warn('While');
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;

while( i < carros.length ){
    console.log( carros[ i ] );
    i += 1;
}

// Ciclo Do-While
// DO, la unica diferencia es que se ejecutara el bloque interno aunque sea una vez, y luego
// ejecuta la condicion while.
console.warn('Do-While');
let j=3;
do {
    console.log( carros[ j ] );
    j+=1;
} while( j < carros.length );

