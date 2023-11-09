import React, { useContext } from "react"
import { Link } from "react-router-dom";



const CartWidget = (props) => {


    return (
        <Link to="/carrito">
            <div>
                <i className="bi bi-cart-fill icono_carrito">{props.icono_carrito}</i>
                <p className="numero_carrito">{props.numero_carrito}</p>
            </div>
        </Link>
    )
}

export default CartWidget