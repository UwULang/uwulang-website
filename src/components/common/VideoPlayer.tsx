import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer: React.FC = () => {
  return (
    <ReactPlayer
      fallback={<div>Video not found</div>}
      playing
      playsinline
      muted
      loop
      url={"convert.webm"}
      width={"100%"}
      height={"100%"}
    />
  );
};
export default VideoPlayer;
