// objetos literales

const personaje  = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.03,
        long: -118.70
    },
    trajes:[ 'Mark1', 'Mark2', 'Hulbuster'],
    direccion: {
        zip: '10080, 90265',
        ubicacion: 'Malibu, California'
    },

    'ultima-pelicula': 'Infinity War' // para usar guiones en las propiedadess debo colocarlas entre comillas simples.
};

console.log(personaje);
console.log('personaje: ' , personaje.nombre,);
console.log('personaje: ' , personaje['nombre']);
console.log('personaje: ' , personaje.edad);
console.log('Latitud: ' , personaje.coords.lat);

console.log('Numero de trajes', personaje.trajes.length);

console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1] );

const tomoPropiedadVivo = 'vivo';  // asigno la propieda 'vivo' a esta variable
console.log('Vivo:', personaje[tomoPropiedadVivo]);  // tomara el valor de la propiedad para devolver el valor
// es como si hiciera esto
console.log( 'Vivo: ', personaje['vivo']);

console.log( 'Ultima pelicula: ', personaje['ultima-pelicula'] );

// Para borrar una propiedad en un objeto literal hacemos asi:
delete personaje.edad;
console.log( personaje );


// si queremos agregar una nueva propiedad hacemos asi:
personaje.casado = true;
// Para convertir las propiedades y sus valores en arreglos hacemos lo siguiente.
// en el arreglo, en el inidice 0 esta la propiedad, y en el 1, sus valor o valores.
const entriesPares = Object.entries( personaje );
console.log (entriesPares);

// Para frizar el objeto, es decir que no acepte nuevas propiedades o modificaciones a las ya existentes, hago lo siguinete:
Object.freeze( personaje );
// si intento agregar otra propiedad como:
personaje.dinero = 10000000;
//comprobaremos que no se agrego esta nueva propiedad
console.log( personaje );

// Si queremos obtener por separado las propiedades y sus valores existen estos dos metodos.
const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );

console.log({ propiedades, valores });

