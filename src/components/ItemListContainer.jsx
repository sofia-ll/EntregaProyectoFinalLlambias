import React from "react";
import { useState, useEffect } from "react";
import pedirLaminas from "./pedirLaminas";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [laminas, setLaminas] = useState([]);
    const [subtitulo, setSubtitulo] = useState(["LAMINAS"]);
    const { category } = useParams()


    useEffect(() => {

        pedirLaminas()
            .then((res) => {
                if (category) {
                    console.log(category)
                    res.forEach(lamina => console.log(lamina.category))
                    setLaminas(res.filter((lamina) => lamina.cat === category));
                }
                else {
                    setLaminas(res);
                    setSubtitulo("LAMINAS");
                }
            })
    }, [category])

    return (
        <div>
            <ItemList laminas={laminas} subtitulo={subtitulo} />
        </div>
    )
};

export default ItemListContainer
