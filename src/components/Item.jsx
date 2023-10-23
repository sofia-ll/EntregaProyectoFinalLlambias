import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Item = ({ lamina }) => {

    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate("/detalle/1")
    }

    return (
        <Link className="ver-mas" to={`/item/${lamina.id}`}>
            <main className="main card-body text-center card-text fs-6 justify boton_tienda">
                <img className="img_obras" src={lamina.imagen} alt={lamina.alt} ></img>
                <div className="cont">
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify producto titulo"><span className="bold"></span> {lamina.nombre}</p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify tamano"><span className="bold">{lamina.tamano}</span> </p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify precio"><span className="bold">${lamina.precio}</span> </p>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text fs-6 justify precio"><span className="bold">Categoría: {lamina.category}</span> </p>
                    </div>

                    <div>
                        <button onClick={handleRedirect} className="btn">Ver más</button>
                    </div>

                </div>
            </main>
        </Link>
    )
}

export default Item



