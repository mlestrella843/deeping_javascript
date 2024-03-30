// Clases en ES6, muy parecido a Java y C pero tiene sus particularidades.

class Persona {

    // Cuando se trabaja con propiedades y metodos estaticos, se trabaja directamente con la estructura de la clase
    // por lo que las propiedades instanciadas no se podran accesar a traves de estas propiedades y metodos estaticos.

    static _conteo = 0;

    static get getConteo(){
        return Persona._conteo + ' Instancias';
    }

    static mensaje(){
        console.log('Tratando de imprimir la propiedad nombre desde este metodo', this.nombre);
        console.log(' Hola, soy un metodo estatico');
    }



    nombre = ''; 
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase || ' Estoy profundizando Javascript';

        Persona._conteo++;
    }

    set setComidaFav( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFav(){
        return ` La comida favorita de ${this.nombre} es ${this.comida} `
    }

    quienSoy = () => {
        console.log(` Soy ${this.nombre} y mi identidad es ${this.codigo} `);
    } 

    miFrase = () => {
        console.log(` ${this.codigo} dice:  ${this.frase} `);
    } 
}

const spiderman = new Persona( 'Peter Parker','Spider','Soy tu buen vecino');
const ironman = new Persona( 'Tony Stark','Iron','Soy Ironman');
const wonderWomen = new Persona( 'Gal Gadot ','Wonder','Soy WonderWoman');
// console.log( spiderman );
// console.log( ironman );

// spiderman.quienSoy();
// ironman.quienSoy();

// spiderman.miFrase();
// ironman.miFrase();

// spiderman.setComidaFav = ' Cheesecake de Oreo';
// console.log( spiderman );

// console.log( spiderman.getComidaFav ) ;

console.log( 'Conteo Estatico', Persona._conteo )
console.log( ' Uso de getConteo directamente' , Persona.getConteo );

Persona.mensaje();