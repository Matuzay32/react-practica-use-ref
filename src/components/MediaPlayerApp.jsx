import React, { useRef, useState } from 'react';




const MediaPlayerApp = () => {

const videoRef = useRef();

const [isplay, setIsplay] = useState(false);



const handdlePlay  = (param)=>{
    
   const video = videoRef.current;

   setIsplay(!isplay);

    isplay ? video.pause()  : video.play()
    

}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <video  onClick={handdlePlay} ref={videoRef} width="400px">
                <source  type="video/mp4" src='videos/planet.mp4'/>
            </video>
        {isplay?  <button onClick={handdlePlay}>Pause</button> :  <button onClick={handdlePlay}>Play</button>}
        
        </div>
    );
};


export default MediaPlayerApp;