import React, {useState} from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        setNumero(numero + 1);
    }

    return ( 
    <>
        <h3>Mi primer componente  {numero}</h3>
        <button className="btn btn-primary" onClick={aumentar}>Aumentar</button>
    </>
    );
}

export default Contador;