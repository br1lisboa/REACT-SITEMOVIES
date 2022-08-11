import React from 'react';
/* import swAlert from 'sweetalert2'; */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Buscador = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let input = e.currentTarget.keyword.value.trim();
        console.log(input);
        if (input.length === 0) {
            toast.error("Debes ingresar alguna palabra!")
        } else if (input.length < 3) {
            toast.error("La palabra no debe tener menos de 3 caracteres!")
        } else {
            e.currentTarget.keyword.value = '';
            navigate(`/resultado?keyword=${input}`)
        };
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex items-center justify-center py-3'>
                <label>
                    <input className='bg-black mr-1 p-1' type="text" name="keyword" placeholder='¿Que pelicula buscas?' />
                </label>
                <button type='submit' className='bg-black text-white p-1'>Buscar</button>
                {<ToastContainer />}
            </form>
        </>
    )
};

export default Buscador;