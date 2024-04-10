
class Singleton{

    static instancia;
    nombre = ' ';

    constructor(nombre = ' ') {

        if ( !!Singleton.instancia) {
          //  throw new Error( `Error: singleton already +  ${Singleton.instancia} ` ) 
            return Singleton.instancia;
        
        }

            Singleton.instancia = this;
            this.nombre = nombre;

            return this
    }

}

const instancia1 = new Singleton('Maria');
console.log( ` Nombre de la instancia1 es ${instancia1.nombre}`);