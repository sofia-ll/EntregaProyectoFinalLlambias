import React from "react"
const CartWidget = (props) => {

    return (
        <div>
            <i className="bi bi-cart-fill icono_carrito">{props.icono_carrito}</i>
            <p className="numero_carrito">{props.numero_carrito}</p>
        </div>
    )
}

export default CartWidget