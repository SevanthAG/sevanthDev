"use client";

import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export function PixelatedProfile() {
  return (
    <div className="mx-auto flex items-center justify-center">
      <PixelatedCanvas
        src="/profile.png"
        width={340}
        height={320}
        cellSize={4}
        dotScale={0.55}
        shape="circle"
        backgroundColor="#0d0e0f"
        tintColor="#d4be98"
        tintStrength={0.35}
        dropoutStrength={0.01}
        interactive
        responsive
        distortionStrength={25}
        distortionRadius={30}
        distortionMode="repel"
        followSpeed={0.3}
        jitterStrength={9}
        jitterSpeed={1}
        sampleAverage
        objectFit="contain"
        className="rounded-xl"
      />
    </div>
  );
}
