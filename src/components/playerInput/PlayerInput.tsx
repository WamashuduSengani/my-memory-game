import React from "react";

interface PlayerInputProps {
  placeholder: string;
}

const PlayerInput = ({ placeholder }: PlayerInputProps) => (
  <input
    type="text"
    placeholder={placeholder}
    className="player-name-input"
  />
);

export default PlayerInput;
