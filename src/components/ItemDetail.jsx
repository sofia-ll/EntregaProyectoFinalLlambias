const ItemDetail = (greeting) => {

    // const nombre = "Sofía"
    // const colorpelo = "rubio"

    return (
        <main className="main">
            <img className="img_obras" src="${lamina.imagen}" alt="${lamina.alt}"></img>
            <div className="cont">
                <div className="card-body text-center">
                    <p className="card-text fs-6 justify producto titulo"><span className="bold"></span> ${lamina.nombre}</p>
                </div>
                <div className="card-body text-center">
                    <p className="card-text fs-6 justify tamano"><span className="bold">${lamina.tamano}</span> </p>
                </div>
                <div className="card-body text-center">
                    <p className="card-text fs-6 justify precio"><span className="bold">$ ${lamina.precio}</span> </p>
                </div>
                <div className="card-body text-center">
                    <button className="card-text fs-6 justify button boton_tienda" id="${lamina.id}">
                        Agregar
                    </button>
                </div>
            </div>
            {/* <p>¡Hola {nombre}!</p>
            <p>Tenés el pelo {colorpelo}</p>
            <p>Te gusta:</p>
            <p>{greeting.hobbies[0]}</p>
            <p>y también </p>
            <p>{greeting.hobbies[1]}</p> */}
        </main>
    )
}

export default ItemDetail