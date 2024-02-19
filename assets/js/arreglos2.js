
let juegos = [ ' Zelda', 'Mario', 'Metroid', 'Chrono' ];
console.log( 'Largo: ', juegos.length ); // Para saber el largo de un arreglo

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1];

console.log( { primero, ultimo } );

//Recorre cada elemento del arreglo, lleva tres parametros, el elemento, su indice, y el arreglo.
//Asume que es el arreglo juegos, desde el principio, al utilizar el . accesa el metodo forEach el cual
//los arreglos en javascript lo poseen.
juegos.forEach( (elemento, indice, arr) => {
    console.log( { elemento, indice, arr } );
})

let nuevaLongitud = juegos.push('F-Zero');   // el metodo push permite colocar un elemento al final del arreglo
console.log( { nuevaLongitud, juegos } );

nuevaLongitud = juegos.unshift('Fire emblem'); // Este metodo unshift permite insertar un elemento al inicio del arreglo
console.log( { nuevaLongitud, juegos } );

let juegoBorrado = juegos.pop();
console.log( { juegoBorrado, juegos } );

let pos = 1;

console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2); // el metodo splice permmite borrar a partir de una posicion, un numero dado de elementos
console.log( { juegosBorrados, juegos });

//el metodo indexOf devuelve el indice del elemento pasado por parametro
// es case sensitive, el parametro debe ser exacto al elemento que se quiere buscar.
// en caso de que no exista devolvera un -1.
let metroidIndex = juegos.indexOf('Metroid'); 
console.log( {metroidIndex} );