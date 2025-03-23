import { BottomWave } from "../svg";

export default function Video() {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Video: fills container */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dagjuuf4v/video/upload/v1742704074/wdercm9wgx6cqiepl1nb.mp4"
        controls
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] pointer-events-none z-20"></div>

      {/* Bottom Wave */}
      <BottomWave  />
    </div>
  );
}
