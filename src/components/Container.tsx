import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</div>
  );
};

export default Container;
