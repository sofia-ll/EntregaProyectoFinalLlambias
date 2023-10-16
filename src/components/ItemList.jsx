import React from "react";
import Item from "./Item"

const ItemList = ({ laminas, subtitulo }) => {
    return (
        <main className="main">
            <h5 className="subtitulo">{subtitulo}</h5>

            <div className="laminas">
                {laminas.map((lamina) => <Item key={lamina.id} lamina={lamina} />)}
            </div>
        </main>
    )
};

export default ItemList

//     laminas.length > 0 &&
//     laminas.map(lamina) => {
//         return(
//esto seria otra opción de ITEM solo//
// <div>
//     <img src={lamina.imagen} alt={lamina.alt} />
//     <h2>{lamina.nombre}</h2>
//     <p>{lamina.tamano}</p>
//     <p>${lamina.precio}</p>
//     <p>${lamina.category}</p>
// </div>
// )
//     })