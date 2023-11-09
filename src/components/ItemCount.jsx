import React from 'react'
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';





function ItemCount({ stock, item, handleAgregarProducto }) {

    //ESTADOS
    const [contador, setContador] = useState(0);

    //ACCIONES
    const handleSumar = () => {
        contador < stock && setContador(contador + 1);
    }

    const handleRestar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const handleResetear = () => {
        setContador(0);
    }

    const handleConfirmar = () => {
        toast.success('Confirmás que agregaste' + ' ' + contador + ' ' + 'lámina/s al carrito')
    }

    return (
        <div>
            <div>
                <button onClick={handleRestar} className="btn">-</button>
                <p>{contador}</p>
                <button onClick={handleSumar} className="btn">+</button>
            </div>
            <div>
                <button className="btn" onClick={() => handleAgregarProducto(item, contador)} disabled={!stock} >Agregar al carrito</button>
            </div>
            <div>
                <button onClick={handleResetear} className="btn">Resetear</button>
                <Link to="/carrito"><button onClick={handleConfirmar} className="btn">Confirmar cantidad</button></Link>


            </div>
        </div>
    )

}

export default ItemCount



