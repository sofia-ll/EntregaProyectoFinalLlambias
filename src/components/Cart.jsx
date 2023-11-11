import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="barrasubt">CARRITO</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <img className="img_obras" src={prod.imagen} alt={prod.alt} ></img>
                        <h3>{prod.nombre}</h3>
                        <p>{prod.tamano}</p>
                        <p>Precio por unidad: ${prod.precio}</p>
                        <p>Cantidad: {prod.contador}</p>
                        <p>Precio total: ${prod.precio * prod.contador}</p>
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio TOTAL:${precioTotal}</h2>
                        <button onClick={handleVaciar}>Vaciar</button>
                        <Link to="/checkout"> Terminar compra</Link>
                    </> :
                    <>
                        <h2>El carrito está vacío</h2>
                        <Link to="/laminas"><button className="btn">Ir a la TIENDA</button></Link>
                    </>
            }

        </div>

    )
}


export default Cart

