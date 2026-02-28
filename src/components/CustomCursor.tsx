"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;


      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }


      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed hidden md:flex pointer-events-none w-3 h-3 rounded-full bg-[#00c950] z-[9999] translate-x-[-50%] translate-y-[-50%] transition-transform duration-75"
      />
      
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed hidden md:flex pointer-events-none w-8 h-8 rounded-full border-2 border-[#00c950] z-[9998] translate-x-[-50%] translate-y-[-50%] transition-transform duration-150"
      />
    </>
  );
};

export default CustomCursor;
