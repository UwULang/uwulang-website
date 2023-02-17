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
    <button className="hover:bg-buttonHover bg-button rounded-full px-8 py-2 text-3xl font-bold text-white transition-all">
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
