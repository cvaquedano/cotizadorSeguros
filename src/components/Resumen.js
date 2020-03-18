import React, { Fragment } from 'react';
import {primerMayuscula} from '../helper'
import styled from '@emotion/styled'

const ContenedorResumen = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838f;
    color:#fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    const {marca,year,plan} = datos;

    if(marca.trim() === '') return null;

    return ( <ContenedorResumen>
        <h2>Resumen de cotizado</h2>
        <ul>
            <li>Marca: {primerMayuscula(marca)}</li>
            <li>Año: {year}</li>
            <li>Plan: {primerMayuscula(plan)}</li>
        </ul>
    </ContenedorResumen> );
}

export default Resumen;