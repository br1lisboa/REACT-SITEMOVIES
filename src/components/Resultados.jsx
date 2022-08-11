import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import sWalert from 'sweetalert2';

const Resultados = () => {

    const query = new URLSearchParams(window.location.search);
    const keyword = query.get('keyword');
    const navigate = useNavigate();

    const [moviesResult, setMoviesResult] = useState([]);


    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=eb1731bf66eebc231abccb6796a4b2e4&language=es-ES&query=${keyword}`
        //console.log(endPoint);

        axios.get(endPoint)
            .then(res => {
                const movie = res.data.results;
                if (movie.length === 0) {
                    sWalert.fire({
                        text: 'No se encontraron resultados similares'
                    });
                    navigate('/listado')
                }
                setMoviesResult(movie)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [keyword, navigate]);

    //console.log(moviesResult);

    return (
        /* contenedor general */
        <div className='h-full'>
            {/* contenedor de titulo */}
            <div className='w-full text-center text-xl'>
                <h2>Resultados</h2>
                <h4>Estas buscando: {keyword}</h4>
            </div>
            {moviesResult &&
                /* contenedor card general*/
                <div className='h-full w-full flex justify-between items-center flex-wrap'>
                    {
                        moviesResult.map((movie, id) => {
                            return (
                                /* contenedor card particular */
                                <div className='border-2 h-96 w-96 flex flex-wrap items-center justify-around py-4 px-4 mx-4 my-4 bg-white' key={id}>

                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className='h-1/2 w-full' />
                                    <div className='h-full'>
                                        <h3 className='text-xl font-bold'>{movie.title}</h3>
                                        <p className='text-justify mx-2 my-2 px-2 py-2'>{movie.overview.substring(0, 150)}...</p>
                                        <button className='w-full'><Link to={`/detalle?movieID=${movie.id}`} className='bg-black text-white mx-2 my-2 py-2 px-2 cursor-pointer'>Ver detalles</Link></button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>


    )
};

export default Resultados;