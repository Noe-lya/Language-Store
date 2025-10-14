import data from "../data/data.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = data.find((elemento) => elemento.id === id);
      if (item) {
        resolve(item);
      } else {
        reject(new Error("Item no encontrado"));
      }
    }, 1000);
  });
};
