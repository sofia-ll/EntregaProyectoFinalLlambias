import CartWidget from "./CartWidget"
const NavBar = (props) => {

    return (

        <header className="header">
            <a className="navbar-brand" href="../index.html">{props.brand}</a>
            <nav className="navbar">
                <a href="#">C.V</a>
                <a href="#">Obras</a>
                <a href="#">Muestras</a>
                <a href="#">Contacto</a>
                <a href="#"><CartWidget icono_carrito="" numero_carrito="0" /></a>
            </nav>

            {/* navbar bootstrap */}
            {/* < nav className="navbar navbar-expand-lg navbar-light desktop" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="../index.html">{props.brand}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="../index.html">Inicio</a>
                            <a className="nav-link" href="#">C.V</a>
                            <a className="nav-link" href="#">Obras</a>
                            <a className="nav-link" href="#">Muestras</a>
                            <a className="nav-link" href="#">Contacto</a>
                            <a className="nav-link" href="#">TIENDA</a>
                            <a href="#"><CartWidget icono_carrito="" numero_carrito="0" /></a>
                        </div>
                    </div>
                </div>
            </nav> */}

        </header>
    )
}

export default NavBar







