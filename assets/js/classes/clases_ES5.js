// CLASES USANDO ES5, para navegadores viejos

// Si defino cada objeto realmente seria insostenible cada vez que quiera un objeto nuevo tener que definirlo,
// como el ejemplo de aqui abajo.

const alberto = {
    nombre: 'Alberto',
    edad: 48,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = {
    nombre: 'Maria',
    edad: 50,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// para esto se crean constructores que puedan crear nuestas instancias con la palabra reservada new.
function Persona( nombre, edad ){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function (){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// Con la palabra reservada new se pueden instanciar miles de objetos ahorrando codigo y controlando
// sus propiedades.
const juana = new Persona( "Juana Maria", 55 );
juana.imprimir();
const jorge = new Persona( "Jorge Luis", 43 );
jorge.imprimir();