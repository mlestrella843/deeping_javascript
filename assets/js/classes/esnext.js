

class Rectangulo {

    // Las propiedades privadas evitan que estas variables puedan modificarse.
    #area = 0;

    constructor( base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = this.base * this.altura;
    }

    //Aun los metodos privados no existen en ES6 y no estan disponibles usando el numeral
    duplicarArea() {
        console.log(` 'duplicar area' --> ${this.#area * 2 }`);
    }

}

const rectangulo = new Rectangulo( 10, 15);
rectangulo.duplicarArea();
console.log(rectangulo);

