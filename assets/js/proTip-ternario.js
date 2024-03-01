
const elMayor = ( a,b ) => {
    return ( a > b ) ? a : b;
};

// Simplificanod la funciom
const elMayor2 = ( a,b ) => ( a > b ) ? a : b;
// En este funcion el parametro es un booleano por defecto.
const tieneMembresia = ( miembro ) => ( miembro ) ? ' 2 Dolares' : ' 10 dolares';

//Impresion en consola
console.log( elMayor2( 20, 15 ) );
console.log( tieneMembresia ( true ) );

// otro ejemplo
const amigo = false;
const amigosArray = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : ' Loki',
    ( () => 'Maria Luisa' )(), // Esta es una funcion anonima autoinvocada
    elMayor( 30, 20 )
]
console.log( amigosArray );

//Otro ejemplo mas real
const nota = 83;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' : 'F' ;

console.log({ nota, grado });

