"use client";

import { useEffect, useId, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: ParticlesProps) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => setInit(true), []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  };

  const initEngine = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <ParticlesProvider init={initEngine}>
      <motion.div animate={controls} className={cn("sparkles-core", className)}>
      {init ? (
        <Particles
          id={id || generatedId}
          className="sparkles-particles"
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background || "transparent" } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: false, mode: "repulse" },
                resize: { enable: true },
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
              collisions: { enable: false, mode: "bounce", overlap: { enable: true, retries: 0 } },
              color: { value: particleColor || "#FFFFFF" },
              effect: { close: true, options: {}, type: undefined },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "out" },
                random: false,
                speed: { min: 0.08, max: 0.8 },
                straight: false,
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                limit: { mode: "delete", value: 0 },
                value: particleDensity || 120,
              },
              opacity: {
                value: { min: 0.08, max: 0.75 },
                animation: {
                  count: 0,
                  enable: true,
                  speed: speed || 1.5,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              shape: { close: true, options: {}, type: "circle" },
              size: {
                value: { min: minSize || 0.4, max: maxSize || 1.4 },
                animation: { enable: false },
              },
              links: { enable: false },
            },
            detectRetina: true,
          }}
        />
        ) : null}
      </motion.div>
    </ParticlesProvider>
  );
};
