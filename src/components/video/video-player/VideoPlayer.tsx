import React, { useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title,
  description,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-primaryContainer text-onPrimaryContainer p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Video Wrapper */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
        <ReactPlayer
          url={videoUrl}
          playing={isPlaying}
          controls
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <div
            className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <button className="text-white text-6xl hover:scale-110 transform transition-transform">
              ▶
            </button>
          </div>
        )}
      </div>

      {/* Video Information */}
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
