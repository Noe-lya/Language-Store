import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>
      {carrito.map((item) => (
        <div key={item.id}>
          <br />
          <h2>{item.name}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Precio total: ${item.price * item.count}</p>
          <p>Cantidad: {item.count}</p>
          <br />
        </div>
      ))}
      <h3>Total: ${precioTotal()}</h3>
      <button onClick={handleVaciar}>Vaciar</button>
    </div>
  );
};
