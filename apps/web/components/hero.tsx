import classNames from "classnames";
import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle: React.FC<HeroElementProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={classNames(
        "my-6 text-6xl md:text-8xl text-gradient text-primary-text",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle: React.FC<HeroElementProps> = ({
  children,
  className,
}) => {
  return (
    <h1 className={classNames("mb-12 text-lg md:text-xl", className)}>
      {children}
    </h1>
  );
};

export const Hero: React.FC<HeroProps> = ({ children }) => {
  return <div className="text-center">{children}</div>;
};
