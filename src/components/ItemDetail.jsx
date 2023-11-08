import React, { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import { useContext } from "react"



function ItemDetail({ item }) {
    const { handleAgregarProducto } = useContext(CartContext)

    return (

        <Link className="ver-mas" to={`/item/${item.id}`}>
            <main className="main card-body text-center">
                <img className="img_obras" src={item.imagen} alt={item.alt} ></img>
                <div className="cont">
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify producto titulo"><span className="bold"></span> {item.nombre}</p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify tamano"><span className="bold">{item.tamano}</span> </p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify precio"><span className="bold">${item.precio}</span> </p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify precio"><span className="bold">Categoría: {item.category}</span> </p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify precio"><span className="bold">Descripción: {item.descripcion}</span> </p>
                    </div>

                    <div className="card-text fs-6 justify button boton_tienda card-body text-center" id={item.id}>
                        <ItemCount item={item} stock={10} handleAgregarProducto={handleAgregarProducto} />
                    </div>

                </div>
            </main>
        </Link>
    )


}

export default ItemDetail