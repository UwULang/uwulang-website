import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: any;
  link?: string;
}
interface BaseButtonProps {
  text: string;
  onClick?: any;
}

const BaseButton: React.FC<BaseButtonProps> = ({ text, onClick }) => {
  if (onClick)
    return (
      <button
        className="rounded-full border-2 border-dark bg-button px-10 py-3 text-center text-3xl text-dark transition-all hover:bg-button/70"
        onClick={onClick}
      >
        {text}
      </button>
    );
  return (
    <button className="rounded-full border-2 border-dark bg-button px-10 py-3 text-center text-3xl text-dark transition-all hover:bg-button/70">
      {text}
    </button>
  );
};

/**
 * Button component
 */
const Button: React.FC<ButtonProps> = ({ text, link, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <BaseButton text={text} />
      </Link>
    );
  }
  return <BaseButton text={text} />;
};

export default Button;
