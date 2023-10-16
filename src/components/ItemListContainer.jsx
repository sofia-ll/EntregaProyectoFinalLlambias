import { useState, useEffect } from "react";
import pedirLaminas from "./pedirLaminas";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [laminas, setLaminas] = useState([]);
    const category = useParams().category;
    console.log(category);

    useEffect(() => {

        pedirLaminas()
            .then((res) => {
                setLaminas(res);
            })
    }, [])

    return (
        <div>
            <ItemList laminas={laminas} />
        </div>
    )
};
// <Link className="ver-mas card-body text-center" to={`/item/${laminas.id}`}>
//     <main className="main">
//         <img className="img_obras" src={laminas.imagen} alt={laminas.alt} ></img>
//         <div className="cont">
//             <div className="card-body text-center">
//                 <p className="card-text fs-6 justify producto titulo"><span className="bold"></span> {laminas.nombre}</p>
//             </div>
//             <div className="card-body text-center">
//                 <p className="card-text fs-6 justify tamano"><span className="bold">{laminas.tamano}</span> </p>
//             </div>
//             <div className="card-body text-center">
//                 <p className="card-text fs-6 justify precio"><span className="bold">${laminas.precio}</span> </p>
//             </div>
//             <div className="card-body text-center">
//                 <p className="card-text fs-6 justify precio"><span className="bold">Categoría: {laminas.category}</span> </p>
//             </div>
//             <div className="">

//             </div>

//         </div>
//     </main>
// </Link>

// 



export default ItemListContainer
