import React from 'react';
type Props = {
  text: string;
  onClick?: () => void;
};
const Button = ({ text, onClick }: Props) => {
  return (
    <button className="bg-button px-5 py-0 h-10 text-tile-lg rounded" onClick={onClick}>{text}</button>
  );
};

export default Button;
