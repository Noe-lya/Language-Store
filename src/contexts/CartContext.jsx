import { createContext, useState } from "react";

export const CartContext = createContext(); //Creo el contexto del carrito

export const CartProvider = ({ children }) => {
  //Utilizo provider para proveer el contexto a los componentes que lo necesiten
  const [carrito, setCarrito] = useState([]); //Estado del carrito, que es un array vacio al principio

  const agregarAlCarrito = (item, cantidad) => {
    //Funcion para agregar un item al carrito
    const itemAgregado = { ...item, count: cantidad }; //Creo un nuevo objeto con las propiedades del item y la cantidad a agregar

    const nuevoCarrito = [...carrito]; //Creo una copia del carrito actual
    const estaEnElCarrito = nuevoCarrito.find(
      //Busco si el item ya esta en el carrito
      (producto) => producto.id === itemAgregado.id //Comparo por id
    );
    if (estaEnElCarrito) {
      //Si el item ya esta en el carrito, sumo la cantidad
      estaEnElCarrito.count += cantidad; //Actualizo la cantidad del item en el carrito
    } else {
      nuevoCarrito.push(itemAgregado); //Si el item no esta en el carrito, lo agrego
    }

    setCarrito(nuevoCarrito); //Actualizo el estado del carrito
  };

  const cantidadEnCarrito = () => {
    //Funcion para saber la cantidad total de items en el carrito
    return carrito.reduce((acc, item) => acc + item.count, 0); //Sumo la cantidad de todos los items en el carrito
  };

  const precioTotal = () => {
    //Funcion para saber el precio total del carrito
    return carrito.reduce((acc, item) => acc + item.count * item.price, 0); //Sumo el precio de todos los items en el carrito
  };

  const vaciarCarrito = () => {
    //Funcion para vaciar el carrito
    setCarrito([]); //Seteo el estado del carrito a un array vacio
  };
  return (
    <CartContext.Provider //Proveo el contexto a los componentes que lo necesiten
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
//Children son los componentes que van a consumir el contexto.
//El value es un objeto que contiene el estado del carrito y las funciones para modificarlo.
