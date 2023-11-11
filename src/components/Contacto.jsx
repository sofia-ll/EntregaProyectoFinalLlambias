import React from 'react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';



const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const send = (data) => {
        console.log(data);
        toast.success('¡Gracias por enviarnos tu consulta! Te contestaremos lo antes posible');
    }

    return (
        <div className="container">
            <h2 className="barrasubt">Contacto</h2>

            <form className="form" onSubmit={handleSubmit(send)}>
                <input type="text" placeholder='Dejanos tu nombre' {...register("nombre")} />
                <input type="email" required="@" placeholder='Dejanos tu e-mail' {...register("email")} />
                <input type="text" className="form-consulta" placeholder='Dejanos tu consulta'{...register("consulta")} />
                <button type='submit'> Enviar</button>

            </form>
        </div>
    )
}

export default Contacto