import React from "react";

interface PlayerImageProps {
  src: string;
  alt: string;
}

const PlayerImage = ({ src, alt }: PlayerImageProps) => (
  <div className="player-image">
    <img src={src} alt={alt} />
  </div>
);

export default PlayerImage;
