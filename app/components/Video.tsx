import { useRef, useState } from "react";
import HeroTitle from "./HeroTitle";
import { PiLayoutLight } from "react-icons/pi";
import { BiPause, BiPlay } from "react-icons/bi";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true)
      } else {
        videoRef.current.pause();
        setIsPlaying(false)
      }
    }
  };

  return (
    <div id="home" className="video-container">
      {/* Video */}
      <video
        ref={videoRef}
        className="video-element"
        src="https://res.cloudinary.com/dagjuuf4v/video/upload/v1742704074/wdercm9wgx6cqiepl1nb.mp4"
        loop
        muted
        playsInline
        onClick={togglePlay}
      />

      {/* SVG and Play/Pause Button */}
      <div className="video-overlay">
        <svg width="100%" height="60vh" viewBox="0 0 100 100" className=" relative">
          <defs>
            <linearGradient id="fillGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#24b9eb50" />
             <stop offset="30%" stopColor="#24b9eb50" />
              <stop offset="100%" stopColor="transparent" stopOpacity="10" />
            </linearGradient>
            <linearGradient id="strokeGradient" gradientUnits="userSpaceOnUse" x1="0" y1="130" x2="100" y2="80">
              <stop offset="0%" stopColor="white" />
              <stop offset="80%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#fillGradient)" stroke="url(#strokeGradient)" strokeWidth="0.3"
            strokeDasharray="320,80" strokeLinecap="round" transform="rotate(0 50 50)" />
        </svg>

        {/* Play/Pause Button */}
        <div onClick={togglePlay} className="flex text-white absolute top-0 w-[100%] h-[60vh] place-items-center justify-center ">
          {isPlaying ? (
             <BiPause className="h-[20vh] w-[20vw]" />
            
          ) : (
            <BiPlay className="h-[20vh] w-[20vw]" />
          )}
        </div>
      </div>
      <HeroTitle />
    </div>
  );
};

export default Video;
