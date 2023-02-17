import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  link?: string;
}
interface BaseButtonProps {
  text: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({ text }) => {
  return (
    <button className="cursor-not-allowed rounded-full border-2 border-dark bg-button px-10 py-3 text-3xl text-dark transition-all hover:bg-buttonHover">
      {text}
    </button>
  );
};

/**
 * Button component
 */
const Button: React.FC<ButtonProps> = ({ text, link }) => {
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
