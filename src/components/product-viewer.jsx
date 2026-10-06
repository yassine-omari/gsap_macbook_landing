"use client"
import useMacbookStore from "@/store";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React from "react";
import StudioLights from "./three/studio-lights";
import ModelSwitcher from "./three/model-switcher";
import { useIsTablet } from "@/hooks/useIsTablet";

const ProductViewer = () => {
  const { color, scale, setScale, setColor } = useMacbookStore();

  const isMobile = useIsTablet();
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        {/* <p className="info">Macbook Pro | Availale in 14&quot; & 16&quot;  in space Gray & Dark colors </p>*/}
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div onClick={()=> setColor("#adb5bd")} className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')} />
            <div onClick={()=> setColor("#2e2c2e")} className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')} />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.096)}
              className={clsx(scale === 0.096 ? 'bg-white text-black' : 'bg-transparent text-white')}
            >
              <p>14&quot;</p>
            </div>
            <div
              onClick={() => setScale(0.128)}
              className={clsx(scale === 0.128 ? 'bg-white text-black' : 'bg-transparent text-white')}
            >
              <p>16&quot;</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas id="canvas" camera={{ position: [-1, 3, 10], fov: 50, near: 0.1, far: 100 }}>
        <StudioLights />
        <ModelSwitcher scale={isMobile ? scale - 0.048 : scale} isMobile={isMobile} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
