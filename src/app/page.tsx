'use client'

import { useContext } from "react";
import { FaPlay, FaPause } from 'react-icons/fa';
import { HomeContext } from "./context/HomeContext";
import { musics } from "./dados/music";
import Sidebar from './Sidebar';
import MusicPlayer from './musicplayer';

export default function Home() {
  const {
    playing,
    selectedMusic,
    configPlayPause,
    selectMusic
  } = useContext(HomeContext);

  return (
    <div className="conteiner">

      <Sidebar musics={musics} onSelectMusic={selectMusic} />

      <div className="central">
        <main className="musicposter">
          {selectedMusic ? (
            <div className="poster">
              <img src={selectedMusic.image} alt={selectedMusic.name} className="ImagemMusica" />
              <h2 className="nomemusica">{selectedMusic.name}</h2>
              <p className="autormusica">{selectedMusic.author}</p>
            {}
            </div>
          ) : (
            <p>Selenione uma música.</p>
          )}
          <div className="MusicPlayer">
            <MusicPlayer /> {}
          </div>
        </main>
      </div>
    </div>
  );
}
