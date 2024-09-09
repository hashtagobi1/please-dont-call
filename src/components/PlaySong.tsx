"use client";

import { useRef } from "react";

export default function AudioPlayer() {
  // Create a reference to the audio element
  const audioRef = useRef<HTMLAudioElement>(null);

  // Function to play the audio
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Function to pause the audio
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="audio-player text-center mt-10 flex items-center justify-center flex-col">
      <h2>Preview Song</h2>
      <audio ref={audioRef} src="./audio/Snippet.mp3" preload="auto" />
      <div className="flex space-x-4">
        <button onClick={playAudio} className="bg-green-500 p-2 rounded">
          Play
        </button>
        <button onClick={pauseAudio} className="bg-red-500 p-2 rounded">
          Pause
        </button>
      </div>
    </div>
  );
}
