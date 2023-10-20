import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import pedirLaminaPorId from "./pedirLaminaPorId";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;


    useEffect(() => {

        pedirLaminaPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )

}


export default ItemDetailContainer

// import React from "react";
// import { useState, useEffect } from "react";
// import laminas from "../data/laminas.json"
// import { useParams, useNavigate } from "react-router-dom";
// import ItemDetail from "./ItemDetail";
// // import pedirLaminaPorId from "./pedirLaminaPorId";

// function ItemDetailContainer() {

//     const [loading, setLoading] = useState(true)
//     const [lamina, setLamina] = useState({})
//     const [notFound, setNotFound] = useState(true)
//     const params = useParams()

//     useEffect(() => {

//         setTimeout(() => {
//             setLoading(false)

//             laminas.forEach(lamina => {
//                 if (lamina.id === parseInt(params.id)) {
//                     setLamina(lamina)
//                     setNotFound(false)
//                 }

//             })

//         }, 2000);

//     }, [])

//     if (loading) {
//         return <p>Cargando...</p>
//     }

//     if (notFound) {
//         return <p>Lamina no encontrada</p>

//     }

//     return (
//         <div>
//             {item && <ItemDetail />}
//         </div>
//     )

// }


// export default ItemDetailContainer
