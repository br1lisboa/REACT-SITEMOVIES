import React from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
        width: 100%;
        height: 100vh;
    `;

const Detalle = () => {


    const token = sessionStorage.getItem('token');

    return (
        <Container>
            {!token && <Navigate to='/' replace='false' />}
            <h2>Detalle</h2>
        </Container>
    )
};

export default Detalle;