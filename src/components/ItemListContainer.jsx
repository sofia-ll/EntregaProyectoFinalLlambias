import React from "react";
import { useState, useEffect } from "react";
import pedirLaminas from "./pedirLaminas";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [laminas, setLaminas] = useState([]);
    const [subtitulo, setSubtitulo] = useState(["TIENDA de láminas"]);
    const { category } = useParams()


    useEffect(() => {

        pedirLaminas()
            .then((res) => {
                if (category) {
                    res.forEach(lamina => console.log(lamina.category))
                    setLaminas(res.filter((lamina) => lamina.cat === category));
                    setSubtitulo(category)
                }
                else {
                    setLaminas(res);
                    setSubtitulo("TIENDA de láminas");
                }
            })
    }, [category])

    return (
        <div>
            <ItemList className="barrasubt" laminas={laminas} subtitulo={subtitulo} />
        </div>
    )
};

export default ItemListContainer
