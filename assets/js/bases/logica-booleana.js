
const regresaTrue = () => {
    console.log(' Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log(' Regresa false');
    return false;
}

console.warn(' Not or la negacion');
console.log( true );
console.log( !true ); // negacion
console.log( !false ); // negacion
 
// En este orden de ejecucion 
console.log( '**************');
console.log( regresaFalse() && regresaTrue() ); // javascript ejecuta la primera funcion, al ver qie es false no ejecuta la segunda funcion.negacion

//En este orden ejecutara las dos funciones
console.log( '**************');
console.log( regresaTrue() && regresaFalse() );

// y asi sucesivamente con los demas operadores logicos que ya conocemos

// Asignaciones

console.log( '******ASIGNACIONES********');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

// Veremos como, si se cumplen las condiciones se imprimira solo el ultimo valor
const a1 = true && 'Hola mundo' && 123;
// Aqui igual, se imprimira el ultimo valor, mundo.
const a2 = 'Hola' && 'mundo'; 
// En esta condicion, como es un or, buscara siempre si hay un true para imprimir esa condicion.
// se imrpimira 'Ya no soy falso'. pues usando OR siempre sera verdadero cuando se encuenre algo que no sea falso.
const a3 = soyFalse || 'Ya no soy falso';

const a4 = soyUndefined || soyNull || soyFalse || 'Ya no soy falso de nnuevo';

// Aqui se para em la ejecución de la funcion regresaTrue, ya que su valor es positivo.
const a5 = soyUndefined || soyNull || regresaTrue() || 'Ya no soy falso de nnuevo' || true;

console.log({ a1, a2, a3, a4, a5 });
