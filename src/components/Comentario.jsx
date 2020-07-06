import React from 'react';

const Comentario = ({sujeto}) => {
    return (
        <>
            <hr/>
            <div className="media">
                <img src={sujeto.urlImagen} alt="" className="mr-3"/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.comentario}
                </div>
            </div>
        </>
    );
}

export default Comentario;
