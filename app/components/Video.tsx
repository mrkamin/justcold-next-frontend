import { useRef, useState } from "react";
import HeroTitle from "./HeroTitle";

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
        <svg width="200" height="200" viewBox="0 0 100 100" className="video-svg">
          <defs>
            <linearGradient id="fillGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#24b9eb50" />
              <stop offset="100%" stopColor="transparent" stopOpacity="10" />
            </linearGradient>
            <linearGradient id="strokeGradient" gradientUnits="userSpaceOnUse" x1="0" y1="90" x2="100" y2="10">
              <stop offset="0%" stopColor="white" />
              <stop offset="73%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#fillGradient)" stroke="url(#strokeGradient)" strokeWidth="0.2"
            strokeDasharray="320,80" strokeLinecap="round" transform="rotate(0 50 50)" />
        </svg>

        {/* Play/Pause Button */}
        <div onClick={togglePlay} className="video-button">
          {isPlaying ? (
            <svg className="video-icon" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg className="video-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>
      <HeroTitle />
    </div>
  );
};

export default Video;
