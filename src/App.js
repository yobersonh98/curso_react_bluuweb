import React from 'react';
//import Contador from './components/Contador';
//import Lista from './components/Lista';
//import Formulario from './components/Formulario';
//import FormHook from './components/FormHook';
//import Ejemplo1 from './components/Ejemplo1';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';


function App() {

  const sujeto= {
    nombre: "Yoberson",
    urlImagen: "https://via.placeholder.com/100",
    comentario: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos libero hic cum labore neque temporibus sequi est, facere voluptas. Alias aspernatur dolore hic, quos illo nemo magnam repellat ut."
  }

  return (
    <div className="container my-5">
      <Saludo nombre="Yoberson"/>
      <Comentario sujeto={sujeto}/>
      <Comentario sujeto={sujeto}/>
    </div>
  );
}

export default App;
