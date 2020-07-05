import React, {useState} from 'react';


const Lista = () => {

    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5,6])

    const [numero, setNumero] = useState(7)


    const agregarElemento = () => {
        //console.log('click')

        setNumero(numero+1)

        setArrayNumero([
            ...arrayNumero, numero
        ])
    }

    return ( 

        <>
            <h2 className="ml-5">Lista</h2>
            <button className="btn btn-primary ml-5" onClick={agregarElemento}>Agregar</button>

            {
                arrayNumero.map((item, index) => <p key={index}> {item} - {index}</p>)
            }
        </>
    );
}

export default Lista;