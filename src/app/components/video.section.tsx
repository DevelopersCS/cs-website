"use client"
import { useRef, useState } from "react";

export function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <section className="w-full bg-white items-center flex">
            <div className="w-full max-w-[1216px] aspect-video rounded-xl mx-auto relative overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay={!isPlaying}
                    className="absolute top-0 left-0 w-full h-full rounded-xl object-cover"
                    src="/assets/videos/example.mp4"
                    muted
                />
                {/* <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold"
                >
                    {isPlaying ? "Pause" : "Play"}
                </button> */}
            </div>

        </section>
    );
}
