import React from 'react';

const InfoClima = ({clima}) => {
    const {name,main} = clima
    const kelvin = 273.15
    return (
        <div className='formulario text-dark w-100'>
            <h2 className='pt-5 text-center'>El clima de {name } es: </h2>
            <p className='parrafo'>La temperatura es: {Number(main.temp - kelvin)}<span>&#x2103;</span></p>
            <p className='parrafo'>La temperatura minima es: {Number(main.temp_min - kelvin).toFixed(2)}<span>&#x2103;</span></p>
            <p className='parrafo'>La temperatura maxima es: {Number(main.temp_max - kelvin).toFixed(2)}<span>&#x2103;</span></p>
        </div>
    );
};

export default InfoClima;