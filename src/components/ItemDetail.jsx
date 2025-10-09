export const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.img} alt={item.name} width={100} />
        <div>
          <h2 className="titulo">{item.name}</h2>
          <p className="descripcion">{item.desc}</p>
          <p className="categoria">{item.categoria}</p>
          <p className="precio">${item.price}</p>
        </div>
      </div>
    </div>
  );
};
