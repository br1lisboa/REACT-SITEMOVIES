//Libraries
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from 'sweetalert2';

function Listado() {

  let token = sessionStorage.getItem('token');

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=eb1731bf66eebc231abccb6796a4b2e4&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
    axios
      .get(endPoint)
      .then(res => {
        const apiData = res.data
        setMovieList(apiData.results);
      })
      .catch(err => {
        swAlert.fire({
          title: 'Error!',
          text: 'No se pudo obtener los datos de la API',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
  }, [setMovieList]);

  //console.log(movieList);

  return (
    <>
      {!token && <Navigate to='/' replace={true} />}
      <div className='h-full bg-slate-300 w-full flex justify-around items-start flex-wrap'>
        {/* Estructura basica */}
        {
          movieList.map((oneMovie, indx) => {
            return (
              <div className='flex items-start justify-around py-4 px-4 mx-4 my-4 bg-white' key={indx}>
                <div className='h-full w-80 flex flex-col justify-around'>
                  <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt="" className='h-full w-full' />
                  <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-xl font-bold'>{oneMovie.title}</h3>
                    <p className='text-justify mx-2 my-2 px-2 py-2'>{oneMovie.overview}</p>
                    <button><Link to={`/detalle?movieID=${oneMovie.id}`} className='bg-black text-white mx-2 my-2 py-2 px-2 cursor-pointer'>View detail</Link></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Listado;