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
                <NavLink to="/litografia" className="navahover">Litografía</NavLink>
                <NavLink to="/escultura" className="navahover">Escultura</NavLink>
                <NavLink to="/pintura" className="navahover">Pintura</NavLink>
                <NavLink to="/calados" className="navahover">Calados</NavLink>
                <NavLink to="/dibujo" className="navahover">Dibujo</NavLink>
                <NavLink to="/fotografia" className="navahover">Fotografía</NavLink>
                <NavLink to="/carrito"><button onClick={() => navigate("/carrito")}><CartWidget icono_carrito="" numero_carrito="0" /></button></NavLink>
            </nav>
        </header >
    )
}

export default NavBar