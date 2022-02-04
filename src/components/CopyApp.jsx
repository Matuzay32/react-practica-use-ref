import React, { useState,useRef } from 'react';
const CopyApp = () => {


const [text, setText] = useState("");
const [iscopy, setIscopy] = useState(false);
const inputRef = useRef();

const handdleCopy = ()=>{
   
    const input = inputRef.current;
    input.select();
    document.execCommand('copy');
    setIscopy(true);

    setTimeout(() => {
        setIscopy(false);
        
    }, 2000);
}


const handdleChange  = (ev)=>{

    setText(ev.target.value);

}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////////////////////  /////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////


    return (
        <div>

        <input ref={inputRef} onChange={handdleChange} type='text' ></input>

        <button value={text} onClick={handdleCopy}>Copy</button>

       {iscopy && <h1>texto copiado correctamente </h1>}
            
        </div>
    );
};


export default CopyApp;