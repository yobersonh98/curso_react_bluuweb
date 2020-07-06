import React, { useState } from 'react';
import {useForm} from 'react-hook-form';


const Ejemplo1 = () => {
    
    const {register, errors, handleSubmit} = useForm();

    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data);

        setEntradas([
            ...Entradas,
            data
        ])

        e.target.reset();
    }
    
    return (

        <>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="titulo"
                    placeholder="Ingrese Titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {
                                value: true,
                                message: 'Campo Obligatorio'
                            },
                            minLength: {
                                value: 2,
                                message: 'Minimo 2 Letras'
                            }
                        })
                    }
                />
                {   
                    errors.titulo &&
                    <span className="text-danger text-small d-block float-right mb-2">
                    {errors.titulo.message}
                    </span>
                }
                <input 
                    name="descripcion"
                    placeholder="Ingrese Descripción"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {
                                value: true,
                                message: 'Campo Obligatorio'
                            },
                            minLength: {
                                value: 2,
                                message: 'Minimo 2 Letras'
                            }
                        })
                    }
                />
                {   
                    errors.descripcion &&
                    <span className="text-danger text-small d-block float-right mb-2">
                    {errors.descripcion.message}
                    </span>
                }
                <button className="btn btn-primary">Agregar</button>
            </form>
        
            <ul className="mt-2">
                {
                    Entradas.map(item => 
                    <li>{item.titulo} - {item.descripcion}</li>
                    )
                }
            </ul>
        </>

    );
}

export default Ejemplo1;