import React from "react";
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "./CartContext"

const NavBar = (props) => {
    const valorDelContexto = useContext(CartContext)

    return (

        <header className="header">

            <nav className="navbar navbar-expand-xl">
                <div className="container-fluid" >
                    <div>
                        <Link className="navbar-brand logo fw-bold fs-2" to="/">
                            <h1>{props.brand}</h1>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="navahover">Inicio/TIENDA</Link>
                            <Link to="/laminas/litografia" className="navahover">Litografía</Link>
                            <Link to="/laminas/escultura" className="navahover">Escultura</Link>
                            <Link to="/laminas/pintura" className="navahover">Pintura</Link>
                            <Link to="/laminas/calados" className="navahover">Calados</Link>
                            <Link to="/laminas/dibujo" className="navahover">Dibujo</Link>
                            <Link to="/laminas/fotografia" className="navahover">Fotografía</Link>
                            <Link to="/contacto" className="navahover">Contacto</Link>

                            <Link to="/carrito"><CartWidget icono_carrito="" numero_carrito={valorDelContexto.cantidadCarrito()} /></Link>
                        </div>
                    </div>

                </div>
            </nav>
        </header >
    )
}

export default NavBar