"use client";

import { ShaderAnimation } from "@/components/ui/shader-animation";

export function Hero3DBackground() {
  return (
    <div className="hero-3d-background" aria-hidden="true">
      <ShaderAnimation />
      <div className="hero-3d-orbit hero-3d-orbit-a" />
      <div className="hero-3d-orbit hero-3d-orbit-b" />
      <div className="hero-3d-lens">
        <span />
      </div>
    </div>
  );
}
