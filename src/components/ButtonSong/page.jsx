"use client";

import { MusicNotes } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const ButtonSong = () => {
  const [isPlay, setIsplay] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Set Audio bro
    const audioInstance = new Audio("/about-you.mp3");
    setAudio(audioInstance);

    // Bersihin object audio ketika komponennya unmounts
    return () => {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    };
  }, []);

  const handleButtonClick = () => {
    if (isPlay) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsplay(!isPlay);
  };

  return (
    <div className="mt-8 flex justify-center items-center">
      <button
        className="bg-color-background flex items-center gap-2 text-color-primary px-4 py-2 rounded-3xl dark:bg-color-primary dark:text-color-background shadow-color-text font-bold [box-shadow:_2px_2px_5px_5px_#222] dark:[box-shadow:_2px_2px_5px_5px_#fff]"
        onClick={handleButtonClick}
      >
        {isPlay ? "PAUSE" : "PLAY"}
        <MusicNotes size={25} />
      </button>
    </div>
  );
};

export default ButtonSong;
