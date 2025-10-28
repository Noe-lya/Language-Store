import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ item }) => {
  const formatCategorias = (categoria) => {
    if (Array.isArray(categoria)) {
      return categoria.join(", ");
    }
    return categoria;
  };

  const { agregarAlCarrito } = useContext(CartContext);

  const [count, setCount] = useState(1);
  const [stockDisponible, setStockDisponible] = useState(item.stock || 0);
  const handleRestar = () => {
    count > 1 && setCount(count - 1);
  };
  const handleSumar = () => {
    count < stockDisponible && setCount(count + 1);
  };
  const handleAgregar = () => {
    if (count <= stockDisponible) {
      agregarAlCarrito(item, count);
      setStockDisponible(stockDisponible - count);
      setCount(1);
    }
  };
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.img} alt={item.name} width={100} />
        <div>
          <h2 className="titulo">{item.name}</h2>
          <p className="descripcion">{item.desc}</p>
          <p className="precio">${item.price}</p>
          <p className="stock">Stock disponible: {stockDisponible}</p>
          {stockDisponible > 0 ? (
            <ItemCount
              count={count}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={handleAgregar}
              stock={stockDisponible}
            />
          ) : (
            <p className="sin-stock">Producto sin stock</p>
          )}
        </div>
      </div>
    </div>
  );
};
