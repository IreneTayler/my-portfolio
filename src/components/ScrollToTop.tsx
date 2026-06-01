"use client"; 

import React, { useState, useEffect } from "react";
import { TbArrowDownFromArc } from "react-icons/tb";

const ScrollToTop: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (typeof window === "undefined") return;
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercent(scrolled);
    setVisible(scrollTop > 300);
  };

  const scrollToTopProgress = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTopProgress}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex justify-center items-center"
          aria-label="Scroll to top"
        >
          <svg className="absolute -top-1 -left-1 w-12 h-12" viewBox="0 0 64 64">
            {/* Background track */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="#0b1a1a"
              strokeWidth="4"
              fill="none"
            />
            {/* Progress indicator */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="#00ff88"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 32 32)"
            />
          </svg>

          <TbArrowDownFromArc className="text-[#00ff88] w-4 h-8 relative z-10 drop-shadow-lg animate-bounce-slow rotate-180" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
