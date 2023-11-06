import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Litografia from "./components/Litografia"
import ItemDetail from "./components/ItemDetail"
import { Toaster, toast } from 'sonner';
import CartWidget from "./components/CartWidget"
import { useState } from "react"
import { CartProvider } from "./components/CartContext"



function App() {

  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <BrowserRouter >
        <CartProvider>
          <NavBar brand="SOFIA LLAMBIAS" />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/laminas" element={<ItemListContainer />} />
            <Route path="/laminas/:category" element={<ItemListContainer />} />
            <Route path="/litografia" element={<Litografia />} />
            <Route path="/carrito" element={<CartWidget />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<p>Error 404. Vuelva a intentar, por favor.</p>} />
          </Routes>
          <Footer />
        </CartProvider>
        <Toaster position="bottom-right" />
      </BrowserRouter >
    </>

  )
}

export default App
