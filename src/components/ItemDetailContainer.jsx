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
