import Item from "./Item"

const ItemList = ({ laminas }) => {
    return (
        <main className="main">
            <section className="subtitulo">
                <h2> LAMINAS:</h2>
            </section>
            {
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