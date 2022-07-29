import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Listado() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token == null) {
      navigate('/')
    }
  }, [navigate, token])

  return (
    <div>Listado</div>
  )
}

export default Listado;