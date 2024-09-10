"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-player text-center mt-20 flex items-center justify-center flex-col">
      <div className="flex gap-2 mb-4">
        <h2>Preview Song</h2>
        <Volume2 />
      </div>
      <audio ref={audioRef} src="./audio/Snippet.mp3" preload="auto" />
      <div className="flex space-x-4">
        <button
          onClick={toggleAudio}
          className={`p-2 rounded ${isPlaying ? "bg-red-500" : "bg-green-500"}`}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
    </div>
  );
}
