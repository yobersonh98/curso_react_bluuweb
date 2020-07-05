import React, {useState} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    //EVENTO onChange
    const handleInputChange = (evento) => {
      //  console.log(evento.target.value)
        setDatos({
            ...datos,
            [evento.target.name]: evento.target.value
        })
    }

    //EVENTO onSubmit
    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.apellido)
    }

    return (
        <>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input placeholder="Ingrese Nombre" 
                    className="form-control" 
                    type="text" 
                    name="nombre"
                    onChange={handleInputChange}/>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese Apellido"
                    className="form-control" 
                    type="text" 
                    name="apellido"
                    onChange={handleInputChange}/>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary" type="submit">Enviar</button>
                </div>
            </form>
            <h3 className="mt-5">{datos.nombre}  {datos.apellido}</h3> 
        </>
    );
}

export default Formulario;