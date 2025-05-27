import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export function MovingBorderBox({
  children,
  borderRadius = "1.5rem",
  duration = 8000,
  width = 800,
  height = 90,
}) {
  // Calculate perimeter for strokeDasharray (rectangle with rounded corners)
  // Approximate perimeter = 2*(width + height) - 8*radius + 2*PI*radius
  // Convert borderRadius to px (assuming rem base 16px)
  const radiusPx = parseFloat(borderRadius) * 16;
  const perimeter =
    2 * (width + height) - 8 * radiusPx + 2 * Math.PI * radiusPx;

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        borderRadius,
        padding: "0.8rem 1rem",
        maxWidth: width,
        minHeight: height,
        margin: "1.5rem auto",
        background: "linear-gradient(135deg, #1e40af, #2563eb, #3b82f6)",
        color: "#c0c0c0", // gray-silver text
        fontSize: "1.125rem",
        textAlign: "center",
        backdropFilter: "blur(6px)",
        boxShadow: "0 0 15px rgba(93, 149, 255, 0.4)", // subtle blue glow
        cursor: "default",
        overflow: "visible",
        transition: "box-shadow s ease",
      }}
      className="hover:shadow-[0_0_20px_rgba(93,149,255,0.7)]"
    >
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius,
          pointerEvents: "none",
          overflow: "visible",
        }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <rect
          x="1.5"
          y="1.5"
          width={width - 3}
          height={height - 3}
          rx={radiusPx}
          ry={radiusPx}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeDasharray={perimeter}
          strokeDashoffset={perimeter}
        >
          <animate
            attributeName="stroke-dashoffset"
            from={perimeter}
            to="0"
            dur={`${duration / 1000}s`}
            repeatCount="indefinite"
          />
        </rect>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#aaaaaa" /> {/* Light gray */}
            <stop offset="50%" stopColor="#cccccc" /> {/* Silver */}
            <stop offset="100%" stopColor="#aaaaaa" />{" "}
            {/* Light gray again for smooth loop */}
          </linearGradient>
        </defs>
      </svg>

      {children}
    </div>
  );
}
