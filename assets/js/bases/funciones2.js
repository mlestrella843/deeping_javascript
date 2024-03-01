// Si una funcion no contiene la palabra return explicitamente no retorna nada, es decir retornara undefined.
const saludarFlecha2 = ( nombre ) => {
    console.log('Saludando con funcion flecha ' + nombre);
    // se puede retornar un valor explicito, como
    // return 1;
    //o varios valores, pero deben estar dentro de corchetes, como si fuera un arreglo.
    return[1,2];
}
let returnFlecha = saludarFlecha2( 'Juana Maria');
console.log({ returnFlecha });

//Si queremos que el resultado sea solo uno de los elementos del array, podemos hacer
console.log(saludarFlecha2('Luis') [0]);

const sumar = ( a, b) => {
    return a + b;
}
console.log("suma es : " + sumar( 5, 3 ));

// si la funcion solo tien una linea de codigo dentro de sus llaves se puede simplicar en esta manera
const sumar2 = ( a, b ) => a + b ; // la flecha se asume como el return.
console.log("suma es : " + sumar2(5,1) );

const getAleatorio = () => {
    return Math.random();
}
console.log( getAleatorio() );

// La misma funcion simplificada
const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );