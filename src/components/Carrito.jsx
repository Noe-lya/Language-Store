import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  if (carrito.length === 0) {
    return (
      <div className="container">
        <h1 className="main-title">Carrito</h1>
        <p>El carrito está vacío</p>
        <Link to="/">Seguir comprando</Link>
      </div>
    );
  }
  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>
      {carrito.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${precioTotal()}</h3>
      <button onClick={handleVaciar}>Vaciar</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};
