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
    }
};

console.log(personaje);
console.log('personaje: ' , personaje.nombre,);
console.log('personaje: ' , personaje['nombre']);
console.log('personaje: ' , personaje.edad);
console.log('Latitud: ' , personaje.coords.lat);

console.log('Numero de trajes', personaje.trajes.length);