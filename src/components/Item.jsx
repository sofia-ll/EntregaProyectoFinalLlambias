const Item = ({ lamina }) => {
    return (
        <div>
            <img src={lamina.imagen} alt={lamina.alt} />
            <h2>{lamina.nombre}</h2>
            <p>${lamina.precio}</p>
            <p>{lamina.tamano}</p>
            <p>{lamina.category}</p>
        </div>
    )

}

export default Item 