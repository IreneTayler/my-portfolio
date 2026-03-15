"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

const GlobalParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="global-particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "#1e1e2f" } }, 
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, 
            onClick: { enable: false },
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#f5f6fa' }, 
          links: {
            enable: true,
            distance: 180,
            color: "#00c950",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" },
          },
          number: {
            value: 100,
            density: { enable: true, area: 1000 },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default GlobalParticles;
