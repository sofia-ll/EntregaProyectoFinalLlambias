import React from 'react'
import { useState } from 'react';


function ItemCount(stock, initial, onAdd) {

    //ESTADOS
    const [contador, setContador] = useState(0);
    // const stock = 10;

    //ACCIONES
    const handleSumar = () => {
        setContador(contador + 1);
    }

    const handleRestar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }

    }

    const handleResetear = () => {
        setContador(1);
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
                <button onClick={handleResetear} className="btn"><h6>Resetear</h6></button>
            </div>

        </div>

    )

}

export default ItemCount


// const ItemCount = () => {

//     const [number, setNumber] = useState(0);

//     const sumar = () => {
//         setNumber(number + 1);
//     }

//     const restar = () => {
//         setNumber(number - 1);
//     }

//     return (
//         <div>
//             <button onClick={restar}>-</button>
//             <h2>{number}</h2>
//             <button onClick={sumar}>+</button>
//             <hr />
//         </div>
//     )
// };

// export default ItemCount
