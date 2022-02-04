import React, { useState,useRef } from 'react';

const FocusApp = () => {
const  [text, setText] = useState("");
const inputRef = useRef();

const handdleChange =(e)=>{

const valorInput=e.target.value
setText(valorInput);

}



const handdleFocus =()=>{
    // El input ref es como utilizar el id 
    //El objeto con la propiedad current contiene todos los valores que podria tener en el dom , como value
    // Sin embargo es una mala practica usarlo en variables de estado como por ej modificar el value no va afectar el value en cuestion
    const input=inputRef.current;

    input.focus();
}


    return (
        <div>



        <input ref={inputRef} type='text' value={text} onChange={handdleChange}/> 

        <button onClick={handdleFocus}>Focus</button>


        </div>
    );
};


export default FocusApp;