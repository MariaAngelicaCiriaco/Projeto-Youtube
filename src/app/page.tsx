'use client';

import { useContext, useEffect, useState } from "react";
import { FaPause, FaPlay, FaVolumeUp, FaVolumeDown } from "react-icons/fa";
import videos from './data/video';  // Verifique o caminho do arquivo
import { convertTimeToString } from "./utils/Utils";
import { HomeContext } from "./context/HomeContext"; 

export default function Home() {
    const [showFilter] = useState(true);
    const {
        videoURL,
        playing,
        totalTime,
        currentTime,
        volume,
        videoRef,
        canvasRef,
        playPause,
        configCurrentTime,
        configVideo,
        videoDetails,
        setVolume 
    } = useContext(HomeContext);

    useEffect(() => {
        if (videoRef && videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume, videoRef]);

    return (
        <main className="video-player-container">
            <div className="main-video">
                <video
                    ref={videoRef}
                    src={videoURL}
                    hidden={showFilter}
                    controls={false}
                ></video>
                <canvas ref={canvasRef} hidden={!showFilter}></canvas>

                <div className="controls">
                    <input
                        type="range"
                        min={0}
                        max={totalTime}
                        value={currentTime}
                        onChange={(e) => configCurrentTime(Number(e.target.value))}
                    />
                    <button onClick={playPause} className="transition-colors">
                        {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </button>

                    {videoDetails && (
                    <div className="">
                        <h2 className="">{videoDetails.title}</h2>
                        <p>{videoDetails.description}</p>
                    </div>
                )}
                    <div className="volume-control">
                        <FaVolumeDown className="volume" />
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.1}
                            value={volume}
                            onChange={(e) => setVolume(Number(e.target.value))}
                            className="appearance-none"
                        />
                        <FaVolumeUp />
                    </div>
                </div>
                <span className="">
                        {convertTimeToString(currentTime)} / {convertTimeToString(totalTime)}
                    </span>

                {videoDetails && (
                    <div className="video-details">
                        <h2>{videoDetails.title}</h2>
                        <p>{videoDetails.description}</p>
                    </div>
                )}
            </div>

            <div className="suggestions">
                {videos.map((video, index) => (
                    <button
                        key={index}
                        className="suggestion-item"
                        onClick={() => configVideo(index)}
                    >
                        <img
                            className="img"
                            src={video.imageURL}
                            alt={`Thumbnail do vídeo ${video.title}`}
                        />
                        <div>
                            <h3 className="suggestion-title">{video.title}</h3>
                            <p className="suggestion-description">{video.description}</p>
                        </div>
                    </button>
                ))}
            </div>
        </main>
    );
}
