// arreglos en javascript

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono'];
console.log({ videoJuegos }); // si ponemos entre llaves la varible, nos imprimira el nonmbre de la variable, dos puntos, mas los valores

console.log( videoJuegos[0]);

let arregloDeCosas = [    // En javascript el arreglo puede tener distintos tipos de datos.
    true,
    123,
    'Maria',
    3 + 5,
    function(){},
    ()=>{},
    { a: 1,
      b: 5
    },
    [ 'x', 'Megaman', 'Chrono', 'Zero', 'Dr. Light', [ 'Maria', 'Luisa'] ]
];

console.log( arregloDeCosas);
console.log( arregloDeCosas[7][2]);
console.log( arregloDeCosas[7][5][1]);
