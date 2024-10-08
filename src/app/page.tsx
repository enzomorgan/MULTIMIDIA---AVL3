'use client'

import { useContext } from "react";
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
    <div className="container">
      <Sidebar musics={musics} onSelectMusic={selectMusic} />

      <div className="central">
        <main className="musicposter">
          {selectedMusic ? (
            <div className="poster">
              <img src={selectedMusic.image} alt={selectedMusic.name} className="ImagemMusica" />
              <h2 className="nomemusica">{selectedMusic.name}</h2>
              <p className="autormusica">{selectedMusic.author}</p>
            </div>
          ) : (
            <p>Selecione uma música.</p>
          )}
          <div className="MusicPlayer">
            {/* Passando o selectedMusic e configPlayPause como props */}
            <MusicPlayer selectedMusic={selectedMusic} playing={playing} configPlayPause={configPlayPause} />
          </div>
        </main>
      </div>
    </div>
  );
}
