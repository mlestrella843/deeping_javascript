console.warn(' Ciclo for tradicional');

const heroes = [ 'Superman', 'Spiderman', 'Mujer Maravilla', 'Aquaman' ];

for( let i = 0  ; i < heroes.length  ; i++ ){
    console.log( heroes[ i ] );
}

console.warn(' Ciclo for in');

for( let i in heroes){ // Aqui el i in toma el valor de indice
    console.log( heroes[ i ] );
}

console.warn(' Ciclo for of');

for( let heroe of heroes){ // Aqui el valoe de heroe of, es el valor que se encuentra en cada indice.
    console.log( heroe );
}

