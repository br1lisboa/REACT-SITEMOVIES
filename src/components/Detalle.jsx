import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from 'sweetalert2';

const Detalle = () => {

    const token = sessionStorage.getItem('token');

    //Vamos a obtener el ID que viaja por URL a el componente detalle.
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=eb1731bf66eebc231abccb6796a4b2e4&language=es-ES`;

        axios
            .get(endPoint)
            .then(res => {
                const apiData = res.data
                setMovieDetail(apiData)
            })
            .catch(err => {
                swAlert.fire({
                    title: 'Error!',
                    text: 'No se pudo obtener los datos de la API',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
    }, [movieID]);

    //console.log(movieDetail);

    return (

        <div className='h-full'>
            {!token && <Navigate to='/' replace='false' />}
            {!movieDetail && <p>Cargando...</p>}
            {movieDetail &&
                <>
                    <h3 className='w-full text-center p-5 text-xl'>Detalles de la pelicula</h3>
                    <div className='w-full h-screen flex items-center justify-around'>
                        <div className='w-full h-full flex items-center justify-center p-2'>
                            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="" className='w-full h-full' />
                        </div>
                        <div className='w-full h-4/6 flex flex-col justify-around items-center p-2'>
                            <h2>Titulo: <span className='text-xl'>{movieDetail.title}</span></h2>
                            <h3>Fecha de estreno: <span className='text-xl'>{movieDetail.release_date}</span></h3>
                            <ul className='flex flex-col items-center justify-center'>
                                <p className='text-xl'>Generos:</p>
                                {
                                    movieDetail.genres.map((oneGenre) => {
                                        return (
                                            <li key={oneGenre.id} className='p-1'>{oneGenre.name}</li>
                                        )
                                    })
                                }
                            </ul>
                            <p>Rating: <span className='text-xl'>{movieDetail.popularity}</span></p>
                            <p className='text-lg'>Sinopsis: <span className='text-lg'>{movieDetail.overview}</span></p>
                        </div>
                    </div>
                    )
                    )
                </>
            }
        </div>
    )
};

export default Detalle;