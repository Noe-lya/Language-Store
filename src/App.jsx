import { NavBar } from "./components/NavBar";
import { Carrito } from "./components/Carrito";
import { ItemListContainer } from "./components/ItemListContainer";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/mundo" element={<ItemListContainer />} />
            <Route path="/mundo/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<h1>Contacto</h1>} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
