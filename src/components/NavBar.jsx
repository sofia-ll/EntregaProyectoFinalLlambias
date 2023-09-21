const NavBar = (props) => {

    //Vista
    return (
        <header className="header">
            <h1>{props.nombre}</h1>
            <nav class="navbar navbar-expand-lg navbar-light desktop">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">SOFIA LLAMBIAS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="../index.html">Inicio</a>
                            <a class="nav-link" href="#">C.V</a>
                            <a class="nav-link" hhref="#">Obras</a>
                            <a class="nav-link" href="#">Muestras</a>
                            <a class="nav-link" href="#">Contacto</a>
                            <a class="nav-link" href="#">TIENDA</a>
                            <a class="nav-link icono_carrito" href="#" tabindex="-1" aria-disabled="true"><i class="bi bi-cart-fill"></i>  <span class="numero_carrito">0</span></a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar