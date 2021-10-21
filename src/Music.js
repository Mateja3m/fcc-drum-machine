import React from "react";
import { useEffect, useState } from "react";

const Music = ({ clip, volume, setRecord }) => {
  const [active, setActive] = useState(false);
  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (e.keyCode === clip.keyCode) {
      playMusic();
    }
  };

  function playMusic() {
    const audioTag = document.getElementById(clip.keyTrigger);
    audioTag.currentTime = 0;
    audioTag.volume = volume;
    setTimeout(() => {
      setActive(false);
      setRecord('');
    }, 800);
    setActive(true);
    audioTag.play();
    setRecord((prev)=> prev + clip.id + " ")
  }

  return (
    <button
      onClick={playMusic}
      className={`btn btn-success p-3 m-2 ${active && "btn-danger"}`}
      id="clip.keyTrigger"
    >
      <audio id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </button>
  );
};

export default Music;
