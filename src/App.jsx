import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter >
        <NavBar brand="SOFIA LLAMBIAS" />
        <ItemListContainer hobbies={["cantar", "ir a museos de arte"]} />
        <ItemDetailContainer />
        {/* <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/lamina/:id" element={<ItemDetailContainer />} />
          <Route path="/:test" element={<p>404 vuelva a intenta por favor</p>} />
        </Routes> */}
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
