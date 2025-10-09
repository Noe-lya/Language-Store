import { pedirDatos } from "../helpers/pedirDatos";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [titulo, setTitulo] = useState("Mundo");
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirDatos().then((data) => {
      if (categoria) {
        const filtrados = data.filter((item) =>
          item.categoria.includes(categoria)
        );
        setItems(filtrados);
        setTitulo(categoria);
      } else {
        setItems(data);
        setTitulo("Mundo");
      }
    });
  }, [categoria]);

  return <ItemList items={items} titulo={titulo} />;
};
