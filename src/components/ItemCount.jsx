import React from 'react'
import { useState } from 'react';


function ItemCount({ stock, initial, handle, onAdd, item }) {

    //ESTADOS
    const [contador, setContador] = useState(0);

    //ACCIONES
    const handleSumar = () => {
        contador < item.stock && setContador(contador + 1);
    }

    const handleRestar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }

    }

    const handleResetear = () => {
        setContador(1);
    }

    const handleConfirmar = () => {
        // console.log("confirmar cantidad", contador)
        handle(contador)
        // props.handle()
    }

    return (
        <div>
            <div>
                <button onClick={handleRestar} className="btn">-</button>
                <p>{contador}</p>
                <button onClick={handleSumar} className="btn">+</button>
            </div>
            <div>
                <button className="btn" onClick={() => onAdd(contador)} disabled={!stock}>Agregar al carrito</button>
            </div>
            <div>
                <button onClick={handleResetear} className="btn">Resetear</button>
                <button onClick={handleConfirmar} className="btn">Confirmar cantidad</button>

            </div>
        </div>
    )

}

export default ItemCount



