'use client'

import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Music, musics } from '../dados/music';

type HomeContextData = {
    playing: boolean;
    selectedMusic: Music | null;
    configPlayPause: () => void;
    audio: HTMLAudioElement | undefined;
    selectMusic: (music: Music) => void;
    setVolume: (volume: number) => void;
    playNextSong: () => void;
    playPreviousSong: () => void;
}

export const HomeContext = createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;
}

const HomeContextProvider = ({ children }: ProviderProps) => {
    const [playing, setPlaying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined);
    const [selectedMusic, setSelectedMusic] = useState<Music | null>(null);

    useEffect(() => {
        if (selectedMusic) {
            const newAudio = new Audio(selectedMusic.urlAudio);
            newAudio.volume = 1;
            setAudio(newAudio);

            return () => {
                newAudio.pause();
                newAudio.src = '';
                setAudio(undefined);
            };
        }
    }, [selectedMusic]);

    const configPlayPause = () => {
        if (playing) {
            pause();
        } else {
            play();
        }
        setPlaying(!playing);
    }

    const play = () => {
        if (audio) {
            audio.play();
        }
    }

    const pause = () => {
        if (audio) {
            audio.pause();
        }
    }

    const selectMusic = (music: Music) => {
        setSelectedMusic(music);
        setPlaying(false);
    }

    const setVolume = (volume: number) => {
        if (audio) {
            audio.volume = volume;
        }
    }

    const playNextSong = () => {
        if (selectedMusic) {
            const currentIndex = musics.findIndex(music => music.name === selectedMusic.name);
            const nextIndex = (currentIndex + 1) % musics.length;
            const nextMusic = musics[nextIndex];
            selectMusic(nextMusic);
            play();
        }
    }

    const playPreviousSong = () => {
        if (selectedMusic) {
            const currentIndex = musics.findIndex(music => music.name === selectedMusic.name);
            const previousIndex = (currentIndex - 1 + musics.length) % musics.length;
            const previousMusic = musics[previousIndex];
            selectMusic(previousMusic);
            play();
        }
    }

    return (
        <HomeContext.Provider value={{
            playing,
            selectedMusic,
            configPlayPause,
            selectMusic,
            audio,
            setVolume,
            playNextSong,
            playPreviousSong
        }}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;