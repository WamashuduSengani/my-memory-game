import React from "react";

interface PlayerInputProps {
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlayerInput = ({ placeholder, value, onChange }: PlayerInputProps) => (
  <input
    type="text"
    placeholder={placeholder}
    className="player-name-input"
    value={value}
    onChange={onChange}
  />
);

export default PlayerInput;
