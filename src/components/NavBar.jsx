import React from "react";
import CartWidget from "./CartWidget"
import { Link, NavLink, useNavigate } from "react-router-dom"


const NavBar = (props) => {

    const navigate = useNavigate()

    return (

        <header className="header">

            <Link className="navbar-brand" to="/">
                <h1>{props.brand}</h1>
            </Link>

            <nav className="navbar">
                <div className="container-fluid" >
                    <Link to="/" className="navahover">Inicio</Link>
                    <Link to="/laminas" className="navahover">LAMINAS</Link>
                    <Link to="/laminas/litografia" className="navahover">Litografía</Link>
                    <Link to="/laminas/escultura" className="navahover">Escultura</Link>
                    <Link to="/laminas/pintura" className="navahover">Pintura</Link>
                    <Link to="/laminas/calados" className="navahover">Calados</Link>
                    <Link to="/laminas/dibujo" className="navahover">Dibujo</Link>
                    <Link to="/laminas/fotografia" className="navahover">Fotografía</Link>
                    <Link to="/carrito"><button onClick={() => navigate("/carrito")}><CartWidget icono_carrito="" numero_carrito="0" /></button></Link>
                </div>
            </nav>
        </header >
    )
}

export default NavBar