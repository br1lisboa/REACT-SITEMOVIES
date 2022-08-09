//Libraries
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function Listado() {

  let token = localStorage.getItem('token');

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=eb1731bf66eebc231abccb6796a4b2e4&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
    axios
      .get(endPoint)
      .then(res => {
        const apiData = res.data
        setMovieList(apiData.results);
      });
  }, []);

  console.log(movieList);

  return (
    <>
      {!token && <Navigate to='/' replace={true} />}
      <div className='h-screen bg-slate-300 w-full flex justify-start items-start'>
        {/* Estructura basica */}
        <div className='flex items-start justify-around py-4 px-4 mx-4 my-4 bg-white'>
          <div className='h-80 w-80 flex flex-col justify-around'>
            <img src="" alt="" className='h-5 w-full' />
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-xl font-bold'>Movie Title</h3>
              <p className='text-justify mx-2 my-2 px-2 py-2'>Review movie, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam nemo commodi. Deserunt architecto distinctio nobis ipsa neque pariatur iure assumenda quis inventore at.</p>
              <button><Link to='/' className='bg-black text-white mx-2 my-2 py-2 px-2 cursor-pointer'>View detail</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Listado;