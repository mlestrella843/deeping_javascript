// funciones basicas- tradicional
function saludar( nombre ) {
    console.log(arguments); // Aqui se guardan todos los parametros enviados, aun no esten definidos en la funcion.
    console.log("Saludando..." + nombre);
}
saludar('Juan');
saludar('Maria Luisa', true, 45, 'Santiago De los caballeros');// argumentos de mas, que se guardan en objeto arguments.

//funcion anonima
// Ya en este tipo de funciones es mas dificil asignar valores, pues ya se declaran como constantes.
let saludar2 = function( nombre ) {
    console.log("Hola, soy una funcion anonima," + nombre);
};
saludar2(' Josefina Perez');

// Funciones de flecha
const saludarFlecha = () => {
    console.log('Saludando con funcion flecha');
}
saludarFlecha();

// Funciones de flecha copn argumentos
const saludarFlecha2 = ( nombre ) => {
    console.log('Saludando con funcion flecha ' + nombre);
}
saludarFlecha2( 'Juana Maria');