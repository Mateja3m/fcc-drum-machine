import React from 'react'
import { useEffect } from 'react';

const Music = ({clip}) => { 
    useEffect(()=> {
        document.addEventListener('keydown', handleKeyPress)
        return ()=> {document.removeEventListener('keydown', handleKeyPress)}
    })

    const handleKeyPress = (e) => {
        e.preventDefault();
        if(e.keyCode === clip.keyCode) {
            playMusic()
        }
    }

    function playMusic() {
        const audioTag = document.getElementById(clip.keyTrigger);
        audioTag.currentTime = 0;
        audioTag.play();
    }

    return (
    <button onClick={playMusic} className={`btn btn-success p-3 m-2`} id="clip.keyTrigger">
        <audio id={clip.keyTrigger} src={clip.url}/>{clip.keyTrigger}
    </button>
    )
    }

export default Music
