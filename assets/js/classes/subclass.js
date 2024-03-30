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

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {
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

    quienSoy(){
        console.log(` Soy ${this.nombre} y mi identidad es ${this.codigo} `);
    } 

    miFrase(){
        console.log(` ${this.codigo} dice: ${this.frase} `);
    } 
}

class Heroe extends Persona{
   
    clan = 'Sin clan';

    constructor( nombre, codigo, frase ){
        super( nombre, codigo, frase );
        this.clan = 'Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
          super.quienSoy();
    }

}

const spiderman = new Persona( 'Peter Parker','Spider','Soy tu buen vecino');
const ironman = new Persona( 'Tony Stark','Iron','Soy Ironman');
const wonderWomen = new Persona( 'Gal Gadot ','Wonder','Soy WonderWoman');

const batman = new Heroe( 'Batman', 'Batman inicia', 'Soy el heroe de la noche' );
console.log( batman );

batman.quienSoy();
batman.miFrase();
