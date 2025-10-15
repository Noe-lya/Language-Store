import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {
  const formatCategorias = (categoria) => {
    if (Array.isArray(categoria)) {
      return categoria.join(", ");
    }
    return categoria;
  };

  const { agregarAlCarrito } = useContext(CartContext);

  const [count, setCount] = useState(1);
  const handleRestar = () => {
    count > 1 && setCount(count - 1);
  };
  const handleSumar = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.img} alt={item.name} width={100} />
        <div>
          <h2 className="titulo">{item.name}</h2>
          <p className="descripcion">{item.desc}</p>
          <p className="categoria">
            Categorías: {formatCategorias(item.categoria)}
          </p>
          <p className="precio">${item.price}</p>
          <ItemCount
            count={count}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, count);
            }}
          />
        </div>
      </div>
    </div>
  );
};
