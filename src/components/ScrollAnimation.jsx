import React, { useEffect, useRef, useState } from 'react';



const ScrollAnimation = () => {


const [fondo, setFondo] = useState('red');

const divRef = useRef();


useEffect(() => {
const handdleScroll  = (param)=>{
    const div= divRef.current;

    const {y} = div.getBoundingClientRect();

    console.log(y)

   const newFondo =  y<=0 ? 'pink' : 'red' ;

   setFondo(newFondo);
   
}
    window.addEventListener("scroll",handdleScroll);
    
    return () => {
        console.log("limpiando");
        window.removeEventListener("scroll",handdleScroll);



    }
}, []);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    return (
			<div>
				<div ref={divRef} style={{  height: "2000px", backgroundColor: fondo }}>
					<h1>Scroll para cambiar el color de fondo</h1>
				</div>
			</div>
		);
};


export default ScrollAnimation;