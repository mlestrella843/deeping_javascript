// objetos literales

let personaje  = {
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

