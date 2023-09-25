import CartWidget from "./CartWidget"
const NavBar = (props) => {

    return (

        <header className="header">
            <h1>{props.brand}</h1>
            <nav className="navbar">
                <a href="#">C.V</a>
                <a href="#">Obras</a>
                <a href="#">Muestras</a>
                <a href="#">Contacto</a>
                <a href="#"><CartWidget icono_carrito="" numero_carrito="0" /></a>
            </nav>
        </header>
    )
}

export default NavBar