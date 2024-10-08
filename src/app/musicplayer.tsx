import { useContext, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
import { HomeContext } from "./context/HomeContext";

export default function MusicPlayer() {
  const {
    playing,
    configPlayPause,
    audio,
    setVolume,
    playNextSong,
    playPreviousSong
  } = useContext(HomeContext);

  const progressBarRef = useRef<HTMLProgressElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (audio) {
      const updateProgressBar = () => {
        if (progressBarRef.current && audio.duration) {
          progressBarRef.current.value = (audio.currentTime / audio.duration) * 100;
        }
      };
      audio.addEventListener('timeupdate', updateProgressBar);
      return () => {
        audio.removeEventListener('timeupdate', updateProgressBar);
      };
    }
  }, [audio]);

  const handleProgressClick = (event: React.MouseEvent<HTMLProgressElement, MouseEvent>) => {
    if (!audio || !progressBarRef.current || !audio.duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * audio.duration;
    audio.currentTime = newTime;
  };
  
  const handleVolumeChange = () => {
    if (volumeRef.current) {
      setVolume(volumeRef.current.valueAsNumber);
    }
  };
  return (
    <div className="playerMusic">
      <h1 className="text-2xl font-bold mb-4">{playing ? "PAUSE" : "PLAY"}</h1>
      {}
      <div className="flex items-center justify-center mb-4">
        {}
        <button onClick={playPreviousSong} aria-label="Voltar" className="mx-4">
          <FaBackward className="text-[30px]" />
        </button>
        {}
        <button onClick={() => configPlayPause()} aria-label="Play/Pause" className="mx-4">
          {playing ? 
            <FaPause className="text-[50px] text-[tomato]" /> : 
            <FaPlay className="text-[50px]" />
          }
        </button>
        {}
        <button onClick={playNextSong} aria-label="Pular" className="mx-4">
          <FaForward className="text-[30px]" />
        </button>
      </div>
      {}
      <progress 
        ref={progressBarRef} 
        className="progress-bar" 
        max={100} 
        value={0} 
        onClick={handleProgressClick}
      />
      {}
      <div className="volume-control mt-4">
        <label htmlFor="volume-slider">Volume: </label>
        <input 
          id="volume-slider" 
          type="range" 
          ref={volumeRef} 
          min="0" 
          max="1" 
          step="0.01" 
          defaultValue="1" 
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}