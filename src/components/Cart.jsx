import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="barrasubt">CARRITO</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <img className="img_obras" src={prod.imagen} alt={prod.alt} ></img>
                        <h3>{prod.nombre}</h3>
                        <p>{prod.tamano}</p>
                        <p>Precio por unidad: ${prod.precio}</p>
                        <p>Cantidad: ${prod.contador}</p>
                        <p>Precio total: ${prod.precio * prod.contador}</p>
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio TOTAL:${precioTotal()}</h2>
                        <button onClick={handleVaciar} Vaciar></button>
                    </> :
                    <>
                        <h2>El carrito está vacío</h2>
                        <Link to="/laminas"><button className="btn">Ir a la TIENDA</button></Link>
                    </>
            }

        </div>

    )
}


export default Cart

// < tr >
//                         <th scope="row">
//                             <img className="img_obras" src={item.imagen} alt={item.alt} ></img>
//                         </th>

//                         <td class="carrito-laminas-titulo">
//                             <small class="negrita">Título:</small>
//                             <p> {item.nombre}</p>
//                         </td>
//                         <td class="carrito-lamina-tamano">
//                             <small>Tamaño:</small>
//                             <p>{item.tamano}</p>
//                         </td>
//                         <td class="carrito-lamina-categoria">
//                             <small>Categoría:</small>
//                             <p>{item.category}</p>
//                         </td>
//                         <td class="carrito-lamina-precio">
//                             <small>Precio por unidad:</small>
//                             <p>${item.precio}</p>
//                         </td>
//                         <td class="carrito-lamina-cantidad">
//                             <small>Cantidad:</small>
//                             <p>{item.contador}</p>
//                         </td>
//                         <td class="carrito-lamina-precio">
//                             <small>Precio TOTAL:</small>
//                             <p>${item.precio * item.contador}</p>
//                         </td>

//                         <td>
//                             <button id="borrar-${lamina.id}" class="carrito-laminas-eliminar">
//                                 <i class="bi bi-trash-fill"></i>
//                             </button>
//                         </td>

//                     </tr >