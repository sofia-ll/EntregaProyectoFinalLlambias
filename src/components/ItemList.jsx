import React from "react";
import Item from "./Item"

const ItemList = ({ laminas, subtitulo }) => {
    return (
        <main className="main">
            <h5 className="barrasubt">{subtitulo}</h5>

            <div className="laminas">
                {laminas.map((lamina) => <Item key={lamina.id} lamina={lamina} />)}
            </div>
        </main>
    )
};

export default ItemList
