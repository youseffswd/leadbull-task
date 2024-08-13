"use client"

import { useEffect, useRef } from "react";

const FixedVideoBackground = () => {
    const video = useRef(null);
    useEffect(() => {   
        video.current.playbackRate = .70;  
    }, []);
    return (
        <div className="w-screen h-screen fixed top-0 left-0 z-[-1] ">
            <video
                className="w-[100vh] h-[100vw] object-cover origin-top-left"
                ref={video}
                style={{ transform: "rotate(-90deg) translateX(-100%)" }}
                src="/fixed-video.mp4"
                muted
                playsInline
                autoPlay
                loop
            ></video>
            <div className="overlay" />
        </div>
    );
};

export default FixedVideoBackground;
