import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Litografia from "./components/Litografia"
import { Toaster } from 'sonner';
import { CartProvider } from "./components/CartContext"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"



function App() {

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
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
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
