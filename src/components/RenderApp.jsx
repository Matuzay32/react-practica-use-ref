import React, { useEffect, useRef, useState } from 'react';

const RenderApp = () => {

const [text, setText]   = useState("");
const renderRef         = useRef(1);

const handdleChange  = (e)=>{
    setText(e.target.value)
}



useEffect(() => {


    renderRef.current ++;

    


    return () => {


    }

});








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    



    return (
        <div>
            <input type= 'text' onChange={handdleChange} value={text} ></input>

            <h1>Renders {renderRef.current}</h1>
        </div>
    );
};


export default RenderApp;