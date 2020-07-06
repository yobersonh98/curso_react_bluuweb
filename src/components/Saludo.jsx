import React from 'react';

const Saludo = (props) => {

    console.log(props)

    return (
        <>
            <h1>Bienvenido {props.nombre}, estos son tus comentarios</h1>
            <br/>
            <h3>Comentarios</h3>
        </>
    );
}

export default Saludo;
