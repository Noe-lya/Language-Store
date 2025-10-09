import { pedirDatos } from "../helpers/pedirDatos";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirDatos().then((data) => {
      if (categoria) {
        const filtrados = data.filter((item) =>
          item.categoria.includes(categoria)
        );
        setItems(filtrados);
      } else {
        setItems(data);
      }
    });
  }, [categoria]);

  return <ItemList items={items} />;
};
