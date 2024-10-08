export type Music = {
    name: string;
    author: string;
    //description: string;
    urlAudio: string;
    image: string;
}

export const musics: Music[] = [
    {
        name: "VIDA LOK4 part1",
        author: "Grelo",
       // description: "musica 01",
        urlAudio: "audios/01 - VIDA LOK4 part.1.mp3",
        image: "./imagens/GRELO.jpg"
    },
    {
        name: "DIAS DE LUTA",
        author: "Grelo",
       // description: "musica 02",
        urlAudio: "musicas/02 - DIAS DE LUTA.mp3",
        image: "./imagens/GRELO.jpg"
    },
    {
        name: "PERTO DE VOCÊ",
        author: "Grelo",
       // description: "musica 03",
        urlAudio: "/musicas/03 - PERTO DE VOCÈ.mp3",
        image: "./imagens/GRELO.jpg"
    },
    {
        name: "DE GRAÇA OU PAGANDO",
        author: "Grelo",
       // description: "musica 04",
        urlAudio: "/musicas/04 - DE GRAÇA OU PAGANDO.mp3",
        image: "./imagens/GRELO.jpg"
    }
];