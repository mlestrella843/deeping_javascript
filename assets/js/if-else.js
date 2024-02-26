
const hoy = new Date();
let dia = hoy.getDay(); // 0 es domingo, 1 es lunes, 2 marte, etc

console.log({dia});

// en la igualacion, cuando utilizamos doble igual, significa que estoy igualando al valor que tiene la variable dia,
// con el valor 0, para los cuales no me importa su tipo. el dia puede ser un numero y el 0 puede ser un numero o un string '0' etc.
// pero cuando uso el triple igual ===, significa que el tipo de la variable debe tener el mimos tipo y valor a 
//lo que la estoy igualando.

if ( dia === 0 ) {
    console.log( 'Es Domingo')
}else{
    
    if( dia === 0 ) {
        console.log('DOMINGO');
    }else if( dia === 1 ){
        console.log('LUNES');
    } else if( dia === 2 ){
        console.log('MARTES');
    } else{
        console.log(' No es lunes, martes o domingo');
    }
}

// ALTERNATIVAS: sin usar if-else, o switch podemos usar OBJETOS.
dia = 5;
const diasLetras = {
    0:'Domingo - 0',
    1:'Lunes - 1',
    2:'Martes - 2',
    3:'Miércoles - 3',
    4:'Jueves - 4',
    5:'Viernes - 5',
    6:'Sábado - 6'
}

// ALTERNATIVAS: sin usar if-else, o switch podemos usar ARREGLOS
const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miércoles','Jueves','Viernes','Sábado'];

console.log(diasLetras2[dia] || 'Dia no valido');