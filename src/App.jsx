import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/mundo" element={<ItemListContainer />} />
          <Route path="/mundo/:categoria" element={<ItemListContainer />} />
          <Route path="/contacto" element={<h1>Contacto</h1>} />
          <Route path="/carrito" element={<h1>Carrito</h1>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
