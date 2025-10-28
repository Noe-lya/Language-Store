export const ItemCount = ({
  count,
  handleRestar,
  handleSumar,
  handleAgregar,
  stock,
}) => {
  return (
    <div>
      <div className="item-count">
        <button onClick={handleRestar} disabled={count <= 1}>
          -
        </button>
        <p>{count}</p>
        <button onClick={handleSumar} disabled={count >= stock}>
          +
        </button>
      </div>
      <button
        className="agregar-al-carrito"
        onClick={handleAgregar}
        disabled={count > stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
