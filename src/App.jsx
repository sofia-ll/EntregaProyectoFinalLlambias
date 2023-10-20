import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Litografia from "./components/Litografia"


function App() {
  return (
    <>
      <BrowserRouter >

        <NavBar brand="SOFIA LLAMBIAS" />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item:id" element={<ItemDetailContainer />} />
          <Route path="/laminas" element={<ItemListContainer />} />
          <Route path="/laminas/:category" element={<ItemListContainer />} />
          <Route path="/litografia" element={<Litografia />} />

        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
