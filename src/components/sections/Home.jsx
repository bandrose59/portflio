"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/moving-border";
import { MovingBorderBox } from "../ui/MovingBorderBox ";

export const Home = () => {
  return (
    <div className="relative h-115 bg-black-950 flex justify-center overflow-hidden bg-clip-text">
      <BackgroundCellCore className="bg-clip-text text-transparent text-center" />
      <div className="relative z-50 mt-30 pointer-events-none select-none max-w-4xl px-4">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
          Ritesh Yevatkar
        </h1>

        {/* Skills */}
        <h2 className="text-xl sm:text-xl md:text-2xl font-semibold text-center text-neutral-300 mt-5 pointer-events-none">
          Full Stack Developer | DevOps Enthusiast | Open Source Contributor
        </h2>

        {/* Description in a hoverable box */}
        <MovingBorderBox className="items-center justify-center text-center mt-5">
          Building scalable web apps, solving real-world problems, and
          contributing to open-source projects.
        </MovingBorderBox>

        <div className="flex flex-wrap justify-center gap-3 mt-4 sm:gap-4 z-10 pointer-events-auto">
          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1HR5Cu_oDZosUaB8KbXIOiBioj2lMACy8/view?usp=drive_link",
                "_blank"
              )
            }
            borderRadius="1.75rem"
            className="bg-blue-600 text-white border border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 ease-in-out"
            borderClassName="bg-[radial-gradient(circle,rgba(59,130,246,0.4)_40%,transparent_60%)]"
          >
            📄View Resume
          </Button>

          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1HR5Cu_oDZosUaB8KbXIOiBioj2lMACy8/view?usp=drive_link",
                "_blank"
              )
            }
            borderRadius="1.75rem"
            className="bg-blue-600 text-white border border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 ease-in-out"
            borderClassName="bg-[radial-gradient(circle,rgba(59,130,246,0.4)_40%,transparent_60%)]"
          >
            🤝Connect with Me
          </Button>
        </div>
      </div>
    </div>
  );
};

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const size = 300;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-full absolute inset-0"
    >
      <div className="absolute h-[30rem] inset-y-0 overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-0 bg-gradient-to-b from-blue-900 to-black [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
 <div className="absolute bottom-0 w-full h-40 z-50 bg-gradient-to-b from-transparent to-black"/>
  
      <div
    className="absolute inset-0 z-40"
    style={{
      maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
      WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
      WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
      WebkitMaskSize: `${size}px`,
      maskSize: `${size}px`,
      pointerEvents: "none",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
    }}
  >
    <Pattern cellClassName="border-blue-600 relative z-[00]" />
  </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
      </div>
    </div>
  );
};

const Pattern = ({ className, cellClassName }) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map(() => y.map(() => [0, 0]));
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <>
      <div className={cn("flex flex-row relative z-30", className)}>
        {matrix.map((row, rowIdx) => (
          <div
            key={`matrix-row-${rowIdx}`}
            className="flex flex-col relative z-20 border-b"
          >
            {row.map((_, colIdx) => {
              const controls = useAnimation();

              useEffect(() => {
                if (clickedCell) {
                  const distance = Math.sqrt(
                    Math.pow(clickedCell[0] - rowIdx, 2) +
                      Math.pow(clickedCell[1] - colIdx, 2)
                  );
                  controls.start({
                    opacity: [0, 1 - distance * 0.1, 0],
                    transition: { duration: distance * 0.2 },
                  });
                }
              }, [clickedCell]);

              return (
                <div
                  key={`matrix-col-${colIdx}`}
                  className={cn(
                    "bg-transparent border-l border-b border-neutral-600",
                    cellClassName
                  )}
                  onClick={() => setClickedCell([rowIdx, colIdx])}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: [0, 1, 0.5] }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    animate={controls}
                    className="bg-[rgba(14,226,233,0.3)] h-12 w-12"
                  ></motion.div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};
