"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update mobile state on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint ~640px
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-100 max-w-5xl mx-auto px-4 mt-6 sm:mt-6">
      <h2 className="text-3xl font-bold mt-14 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        <span className="text-yellow-400 text-lg font-semibold">⭐️⭐️</span>{" "}
        Testimonials{" "}
        <span className="text-yellow-400 text-lg font-semibold">⭐️⭐️</span>
      </h2>

      <div
        className={`rounded-md flex flex-col antialiased bg-dark dark:bg-black dark:bg-grid-white/[1] items-center justify-center relative overflow-hidden ${
          isMobile
            ? "h-[30rem] sm:h-[25rem] w-full"
            : "h-[40rem] sm:h-[30rem] w-full"
        }`}
      >
        {/* Pass direction prop based on screen size */}
        <InfiniteMovingCards
          items={testimonials}
          direction={isMobile ? "down" : "right"}
          speed="slow"
        />
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
