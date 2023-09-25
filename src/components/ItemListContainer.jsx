const ItemListContainer = (greeting) => {

    const nombre = "Sofía"
    const colorpelo = "rubio"

    return (
        <main className="main">
            <p>¡Hola {nombre}!</p>
            <p>Tenés el pelo {colorpelo}</p>
            <p>Te gusta:</p>
            <p>{greeting.hobbies[0]}</p>
            <p>y también </p>
            <p>{greeting.hobbies[1]}</p>
        </main>
    )
}

export default ItemListContainer