/**
 * Container for sections of the page
 */
import React from "react";

interface BlockContainerProps {
  children: React.ReactNode;
  id: string;
  light?: boolean;
}

const BlockContainer: React.FC<BlockContainerProps> = ({
  children,
  id,
  light = true,
}) => {
  return (
    <div
      id={id}
      className={`w-full py-16 text-center ${
        light ? "text-primary" : "bg-primary text-secondary"
      }`}
    >
      <div className="m-auto max-w-6xl">{children}</div>
    </div>
  );
};

export default BlockContainer;
