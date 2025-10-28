import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartItem = ({ item }) => {
  const { eliminarDelCarrito } = useContext(CartContext);

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Precio unitario: ${item.price}</p>
      <p>Cantidad: {item.count}</p>
      <p>Subtotal: ${item.price * item.count}</p>
      <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
    </div>
  );
};
