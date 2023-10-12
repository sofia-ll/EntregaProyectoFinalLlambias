import { useState, useEffect } from "react";
import pedirLaminas from "./pedirLaminas";
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [laminas, setLaminas] = useState([]);

    useEffect(() => {
        pedirLaminas()
            .then((res) => {
                setLaminas(res);
            })
    }, [])



    return (
        <ItemList laminas={laminas} />
    )
};


export default ItemListContainer
