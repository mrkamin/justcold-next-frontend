"use client"
import { useRef, useState } from "react";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="relative w-full h-[90vh] top-[-138]">
      {/* Video: fills container */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/dagjuuf4v/video/upload/v1742704074/wdercm9wgx6cqiepl1nb.mp4"
        controls
        loop
        muted
        onPlay={handlePlay}
        onPause={handlePause}
      />
      
      {/* SVG and Icon Container – visible on md and larger screens */}
      <div className="absolute pointer-events-none hidden md:block md:right-50 md:top-100 lg:right-50 z-50 lg:top-80 transform -translate-y-1/2 w-fit">
        {/* SVG with Gradient Fill and Partial Border */}
        <svg width="200" height="200" viewBox="0 0 100 100" className="absolute">
          <defs>
            <linearGradient id="fillGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#24b9eb50" />
              <stop offset="100%" stopColor="transparent" stopOpacity="10" />
            </linearGradient>
            <linearGradient
              id="strokeGradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="90"
              x2="100"
              y2="10"
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="73%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#fillGradient)"
            stroke="url(#strokeGradient)"
            strokeWidth="0.2"
            strokeDasharray="320,80"
            strokeLinecap="round"
            transform="rotate(0 50 50)"
          />
        </svg>

        {/* Circle Icon Container – now with onClick and pointer events */}
        <div
          onClick={togglePlay}
          className="pointer-events-auto rounded-full w-50 h-50 flex items-center justify-center cursor-pointer"
        >
          {isPlaying ? (
            // Pause Icon
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            // Play Icon
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;