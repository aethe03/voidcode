"use client";

import classNames from "classnames";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [lines, setLines] = useState<
    Array<{
      direction: "to top" | "to left";
      duration: number;
      size: number;
      id: string;
    }>
  >([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to top" : "to left",
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 15),
            id: Math.random().toString().substring(7),
          },
        ]);

        renderLine(randomNumberBetween(800, 2500));

        return () => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
      }, timeout);
    };

    renderLine(randomNumberBetween(800, 1300));
  }, [inView, setLines]);

  return (
    <div ref={ref} className="[perspective:2000px] mt-[12.8rem]">
      <div
        className={classNames(
          "relative bg-white bg-hero-gradient border-transparent-white bg-opacity-[0.01] rounded-lg",
          inView ? "animate-image-skew" : "[transform:rotateX(25deg)]",
          "before:bg-hero-glow before:top-0 before:left-0 before:w-full before:h-full before:absolute before:[filter:blur(120px)] before:opacity-0",
          inView && "before:animate-image-glow"
        )}
      >
        <div className="absolute top-0 left-0 z-20 w-full h-full">
          {lines.map((line) => (
            <span
              key={line.id}
              onAnimationEnd={() => removeLine(line.id)}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                "bg-glow-lines block absolute top-0",
                line.direction === "to left" &&
                  "left-0 h-[1px] w-[calc(var(--size)*1rem)] animate-glow-line-horizontal",
                line.direction === "to top" &&
                  "right-0 w-[1px] h-[calc(var(--size)*1rem)] animate-glow-line-vertical"
              )}
            />
          ))}
        </div>
        <svg
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
          className={classNames(
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            inView && "[&_path]:animate-frame-draw"
          )}
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            className={classNames(
              "relative z-10 opacity-0 transition-opacity delay-[680ms]",
              inView ? "opacity-100" : "opacity-0"
            )}
            src="/img/hero.webp"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};
