import React from 'react';
import { Navigate } from 'react-router-dom';

const Detalle = () => {

    const token = sessionStorage.getItem('token');

    //Vamos a obtener el ID que viaja por URL a el componente detalle.
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');
    console.log(movieID);

    return (
        <div className='h-screen'>
            {!token && <Navigate to='/' replace='false' />}
            <h2>Detalle</h2>
        </div>
    )
};

export default Detalle;