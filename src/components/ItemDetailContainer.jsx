import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { baseDeDatos } from "../firebase/config";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(baseDeDatos, "idiomas", id);
    getDoc(docRef).then((res) => {
      setItem({ id: res.id, ...res.data() });
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <p>Cargando idioma...</p>
      </div>
    );
  }

  return <div>{item && <ItemDetail item={item} />}</div>;
};
