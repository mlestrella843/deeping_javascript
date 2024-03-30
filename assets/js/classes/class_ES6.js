// Clases en ES6, muy parecido a Java y C pero tiene sus particularidades.

class Persona {

    nombre = ''; 
    codigo = '';
    frase = '';

    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase || ' Estoy profundizando Javascript';
    }
}

const spiderMan = new Persona( 'Maria','ABC','Dios me ama');
console.log( spiderMan );

