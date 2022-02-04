import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';

const LoadingApp = () => {


const [show, setShow] = useState(false);


const handdleClick  = (e)=>{

    setShow(!show);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
   
return (

<div>
        <button onClick={handdleClick}>show</button>

        
          {show &&   <Card/>}


        </div>
    );
};


export default LoadingApp;