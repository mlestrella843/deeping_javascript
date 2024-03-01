// el tipado en javascript es debil, por lo que javascript infiere el tipo de datos segun le signemos los valores.
// En javascript se utiliza la practica del Camel case en la definicion de variables como let superPoder = true
let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben parker';
console.log(nombre);

nombre = "Tia May";
nombre = `Juliana Perez`;
console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

nombre = true;
console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);


//el null devuelve un objeto, Por eso muchos dicen que el null es un objetio, y no un valor primitivo.
let soyNull = null;
console.log(typeof soyNull);

// el dato tipo Symbol

let symbol1 = Symbol();
let symbol2 = Symbol("hola");

console.log(typeof symbol1);
console.log(typeof symbol2);
console.log(symbol1);
console.log(symbol2);
