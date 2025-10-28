import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { baseDeDatos } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [titulo, setTitulo] = useState("Mundo");
  const categoria = useParams().categoria;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(baseDeDatos, "idiomas");

    const q = categoria
      ? query(productosRef, where("category", "array-contains", categoria))
      : productosRef;

    getDocs(q).then((res) => {
      const productos = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(productos);
      setTitulo(categoria || "Mundo");
      setLoading(false);
    });
  }, [categoria]);

  if (loading) {
    return (
      <div className="container">
        <p>Cargando idiomas...</p>
      </div>
    );
  }

  return <ItemList items={items} titulo={titulo} />;
};
