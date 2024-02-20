
const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

//puedo imprimir directamente la funcion con sus parametros
console.log(crearPersona('Maria', 'Estrella'));

// o primero crear la persona y luego mandarla a imprimir
const persona = crearPersona('Juan', 'Lopez');
console.log( persona );

// si quiero utilizar el objeto argumets, el cual me permite guardar los srgumentos en un objeto llamago argumets
// en la funciones de flecha se hace diferente a como vimos en una funcion tradicional.
// solo que en esta forma no puedo anadirle otro parametro detras. pero si delante, y debe de estar separado

const imprimeArguments = (...args) => {
    console.log( ...args );
}
imprimeArguments('Maria', 'es una deportista', 40, true);

// como esta forma
// const imprimeArguments2 = (edad, ...args) => {
    const imprimeArguments2 = (...args) => {
    // console.log( {edad, args} );
    return args; 
}
// imprimeArguments2( 45, 'Maria', 'es una deportista', 40, true);

// Puedo hacer esto tambien. Use la opcion sin el parametro de edad, ya que me estaba alterando el orden
const [ casada, viva, nombre, saludo ] = imprimeArguments2( false, 'vive', 'María', 'Hola' );
console.log({ casada, viva, nombre, saludo });

// tambien podemos hacer esto. Sabemos que crearPersona tiene dos propiedades, y quiero sacar solo la de apellido.
const { apellido: nuevoApellido } = crearPersona( ' Pepe', 'Perez' );
console.log(nuevoApellido);

