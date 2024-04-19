class Persona {

    static porObjeto( { nombre, apellido, pais } ){
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais  = pais;
    }
    getInfo(){
        console.log( `Info: ${this.nombre}, ${this.apellido}, ${this.pais}` );
    }
}

const nombre1 = 'Maria',
      apellido = 'Pérez',
      pais = 'Republica Dominicana';

const personObject = {
    nombre: 'Luisa',
    apellido: 'Lopez',
    pais: 'Jamaica'
}

const persona1 = new Persona( nombre1, apellido, pais);
const persona2 = Persona.porObjeto( personObject );

persona1.getInfo();
persona2.getInfo()
