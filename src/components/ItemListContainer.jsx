import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config"


const ItemListContainer = () => {

    const [laminas, setLaminas] = useState([]);
    const [subtitulo, setSubtitulo] = useState(["TIENDA de láminas"]);
    const { category } = useParams()


    useEffect(() => {

        const productosRef = collection(db, "productos");
        const q = category ? query(productosRef, where("cat", "==", category)) : productosRef;

        getDocs(q)
            .then((resp) => {
                setLaminas(

                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })

    }, [category])

    return (
        <div>
            <ItemList className="barrasubt" laminas={laminas} subtitulo={subtitulo} />
        </div>
    )
};

export default ItemListContainer
