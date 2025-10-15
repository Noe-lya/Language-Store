import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);
  //Uso la funcion que se encuentra en el contexto para obtener la cantidad de items en el carrito
  return (
    <div>
      {/* <img src="/assets/carrito.png" alt="cart" className="cart" /> */}
      <li className="nav-item menu-link">
        <Link className="nav-link active" to="/carrito">
          Carrito
          <span className="numerito"> {cantidadEnCarrito()}</span>{" "}
          {/* Muestro la cantidad de items en el carrito */}
        </Link>
      </li>
    </div>
  );
};
