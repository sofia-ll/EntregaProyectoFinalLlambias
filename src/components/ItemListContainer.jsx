import React from "react";
import { useState, useEffect } from "react";
import pedirLaminas from "./pedirLaminas";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [laminas, setLaminas] = useState([]);
    const [subtitulo, setSubtitulo] = useState(["LAMINAS"]);
    const categoria = useParams().category;
    // console.log(categoria);

    useEffect(() => {

        pedirLaminas()
            .then((res) => {
                if (categoria) {
                    setLaminas(res.filter((lamina) => lamina.category === categoria));
                    setSubtitulo(categoria);
                }
                else {
                    setLaminas(res);
                    setSubtitulo("LAMINAS");
                }
            })
    }, [categoria])

    return (
        <div>
            <ItemList laminas={laminas} subtitulo={subtitulo} />
        </div>
    )
};

export default ItemListContainer
