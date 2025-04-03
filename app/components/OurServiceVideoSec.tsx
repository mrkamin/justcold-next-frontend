import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OurServiceVideoSec = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
      setShowIcon(true); // Show icon when clicked
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const hideIconTimeout = setTimeout(() => {
        setShowIcon(false);
      }, 1000); // Hide icon after 3 seconds
      return () => clearTimeout(hideIconTimeout);
    }
  }, [isPlaying]);

  return (
    <div className="relative w-full h-[50vh] border-4 border-[#24b8eb] rounded-lg overflow-hidden" data-aos="fade-up">
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/dagjuuf4v/video/upload/v1742704074/wdercm9wgx6cqiepl1nb.mp4"
        loop
        muted
        onClick={handleVideoClick}
      />

      {/* Smooth Fade-Out Play/Pause Overlay */}
      <AnimatePresence>
        {showIcon && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }} // Smooth fade-out
          >
            <div className="bg-white/80 rounded-full p-3">
              {isPlaying ? (
                <svg className="w-12 h-12 text-[#24b8eb]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" /> {/* Pause Icon */}
                </svg>
              ) : (
                <svg className="w-12 h-12 text-[#24b8eb]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" /> {/* Play Icon */}
                </svg>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurServiceVideoSec;
