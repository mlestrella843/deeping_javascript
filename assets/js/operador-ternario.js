
// Funcion para saber si mi tienda esta abierta o no, mediante mi pagina web.

const dia = 3;
const horaActual = 13;

let horaApertura;
let mensaje;

// if ( dia === 0  || dia === 6 ) {
//     if( [0,6].includes(dia)) {
//     console.log(' Es fin de semana ');
//     horaApertura = 9;
// }else{
//     console.log('Es dia de semana');
//     horaApertura=11;
// }

//Uso de OPERADOR TERNARIO
// Aqui esta pregunta si el dias es 0 o es 6. es decir si es fin de semana?
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11; 
if( horaActual >= horaApertura){
    mensaje = 'La tienda esta abierta';
}else{
    mensaje = `La tienda esta cerrada, hoy abrimos a las ${horaApertura}`;
}


console.log({ horaApertura, mensaje });