
// Variables por valor
// Lo que significa es que estoy cambiando o asignando valores al mismo lugar de memoria, a la misma variable.
// al mismo espacio en memoria en la que fue definida esa variable.
let a = 10;
let b = a;

a = 30;

console.log({ a,b });

// en javascript todos los objetos son pasados por referencia.

let juan = { nombre: 'Juan'};
let ana = juan;
// Aqui, mas que asignarle el valor de juan, le estoy asignando el espacio de memoria de juan,
// es decir que ana tendra el mismo espacio en memoria que juan, por tanto si hago algun cambio en ana
// se reflejara en juan tambien, pues ya tienen el mismo espacio en memoria.
ana.nombre = 'Ana';

// Probemos con juan ahora
juan.nombre = 'Pedro';

// hemos comprobado lo que dijimos anteriormente, cualquier cambio de valor tanto en ana como en juan,
//se reflejaran en ambos al mismo tiempo.

console.log({ juan,ana });
