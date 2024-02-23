
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

// Para remediar o poder trabajar con objetos de manera que no se alteren las variables hacemos lo siguiente
// Si lo dejamos tal cual, pasara lo mismo de que tanto peter como maria tendran el mismo valor
// porque en los objetos de javascript las asignaciones de propiedadses, son por referecia.
const cambiarPersona = (persona) => {
    persona.nombre = 'Tony';
    return persona
}

let peter = { nombre: 'Peter'};

let maria = cambiarPersona(peter);

console.log({ peter, maria });

// Para evitar esto hacemos
// se utiliza el operador spread dentro de llaves, para romper con esto.

const cambiarPersona1 = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona
}

let peter1 = { nombre: 'Peter'};

let maria1 = cambiarPersona1(peter1); 
console.log({ peter1, maria1 });

//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = frutas;
otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });
// Como vemos nos ocurre lo mismo que en los objetos. Se esta asignando el espacio de memoria mas que el valor
// que queremos insertar.
// Para arreglar esto hacemos lo siguiente
// Aqui lo que hacemos es que agregamos el operador spread para separar el arreglo frutas, es decir
// que sea un espacio de memoria diferente al arreglo de frutas. 
// otras Frutas1 tiene el valos de frutas pero ya es un nuevo arreglo, es decir, un espacio de memoria diferente.
const otrasFrutas1 = [...frutas];
otrasFrutas1.push('Zapote');
console.table({ frutas, otrasFrutas1 });

