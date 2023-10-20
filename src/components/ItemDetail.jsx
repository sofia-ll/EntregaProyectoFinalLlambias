import React from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = (lamina) => {
    console.log(lamina)
    return (

        <Link className="ver-mas" to={`/item/${lamina.id}`}>
            <main className="main card-body text-center">
                <img className="img_obras" src={lamina.imagen} alt={lamina.alt} ></img>
                <div className="cont">
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify producto titulo"><span className="bold"></span> {lamina.nombre}</p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify tamano"><span className="bold">{lamina.tamano}</span> </p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify precio"><span className="bold">${lamina.precio}</span> </p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify precio"><span className="bold">Categoría: {lamina.category}</span> </p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify precio"><span className="bold">Categoría: {lamina.descripcion}</span> </p>
                    </div>

                    <div className="card-text fs-6 justify button boton_tienda card-body text-center" id={lamina.id}>
                        <ItemCount stock={10} inicial={1} onAdd={(contador) => console.log("Cantidad agregada:", contador)} />
                    </div>

                </div>
            </main>
        </Link>
    )

}


export default ItemDetail