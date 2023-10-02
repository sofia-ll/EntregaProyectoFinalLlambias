
import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"



function App() {
  return (
    <>
      <NavBar brand="SOFIA LLAMBIAS" />
      <ItemListContainer hobbies={["cantar", "ir a museos de arte"]} />
    </>
  )
}

export default App
