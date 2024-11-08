// video.ts
export type Video = {
    videoURL: string;
    imageURL: string;
    description: string;
    title: string;
};

const videos: Video[] = [
    {
        videoURL: 'video/NossosDias.mp4',
        imageURL: 'image/nossosdias.jpg',
        description: 'Baku no Kokoro no Jabai Yatsu 2ª Temporada OP/Opening Song Phool',
        title: 'Alok & Zeeba - Nossos Dias',
    },
    {
        videoURL: 'video/eusemvoce.mp4',
        imageURL: 'image/eusemvoce.jpg',
        description: 'Wesley Safadão e Gusttavo Lima - Eu Sem Você - Arrocha Safadão',
        title: 'Eu Sem Você - Arrocha Safadão',
    },
];

export default videos;
