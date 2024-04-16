
// class Singleton{

//     static instancia;
//     nombre = ' ';

//     constructor(nombre = ' ') {

//         if ( !!Singleton.instancia) {
//           //  throw new Error( `Error: singleton already +  ${Singleton.instancia} ` ) 
//             return Singleton.instancia;
        
//         }

//             Singleton.instancia = this;
//             this.nombre = nombre;

//             return this
//     }

// }

// const instancia1 = new Singleton('Maria');
// console.log( ` Nombre de la instancia1 es ${instancia1.nombre}`);

//* En este ejemplo, el Singleton ShoppingCart se utiliza 
//*para crear una única instancia de un carrito de compras. Cada vez que se llama a getInstance, 
//*se devuelve la misma instancia del carrito. Esto garantiza que todas las operaciones realizadas
//* en el carrito se reflejen correctamente en toda la aplicación, ya que siempre se está trabajando 
//*con la misma instancia del carrito. */

const ShoppingCart = (function() {
    let instance; // Variable privada que almacenará la única instancia
    const items = []; // Variable privada para almacenar los elementos del carrito
  
    function createInstance() {
      // Función privada que crea la instancia única
      return {
        addItem: function(item) {
          items.push(item);
        },
        removeItem: function(index) {
          items.splice(index, 1);
        },
        getItems: function() {
          return items;
        },
        getTotalPrice: function() {
          return items.reduce((total, item) => total + item.price, 0);
        }
      };
    }
  
    return {
      getInstance: function() {
        // Función pública que devuelve la instancia única, creándola si es necesario
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  // Uso del Singleton
  const cart1 = ShoppingCart.getInstance();
  const cart2 = ShoppingCart.getInstance();
  
  cart1.addItem({ name: 'Camisa', price: 20 });
  cart2.addItem({ name: 'Pantalones', price: 30 });
  
  console.log(cart1.getItems()); // Output: [{ name: 'Camisa', price: 20 }]
  console.log(cart2.getItems()); // Output: [{ name: 'Camisa', price: 20 }, { name: 'Pantalones', price: 30 }]
  
  console.log(cart1 === cart2); // Output: true, ambas variables hacen referencia al mismo carrito
  