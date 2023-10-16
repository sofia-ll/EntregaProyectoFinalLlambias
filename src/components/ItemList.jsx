import Item from "./Item"

const ItemList = ({ laminas }) => {
    return (
        <main className="main">
            <section className="subtitulo">
                <h5> LAMINAS:</h5>
            </section>
            {
                //     laminas.length > 0 &&
                //     laminas.map(lamina) => {
                //         return(
                //esto seria otra opción de ITEM solo//
                // <div>
                //     <img src={lamina.imagen} alt={lamina.alt} />
                //     <h2>{lamina.nombre}</h2>
                //     <p>{lamina.tamano}</p>
                //     <p>${lamina.precio}</p>
                //     <p>${lamina.category}</p>
                // </div>
                // )
                //     })
                laminas.length > 0 &&

                laminas.map((lamina) => {
                    return (
                        <Item key={lamina.id} lamina={lamina} />
                    )
                })
            }
        </main>
    )
};

export default ItemList