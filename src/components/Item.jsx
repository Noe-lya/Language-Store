import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="producto">
      <img src={item.img} alt={item.name} width={100} />
      <div>
        <h2>{item.name}</h2>
        <p className="precio">Precio: ${item.price}</p>
        <Link className="ver-mas" to={`/item/${item.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};
