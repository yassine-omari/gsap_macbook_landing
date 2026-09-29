"use client"
import React, { useRef, useEffect } from "react";


const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  })
  return (
    <section id="hero">
      <div>
        <h1>Macbcook Pro</h1>
        <img src="/title.png" alt="Macbook title" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Buy</button>
      <p>From $1599 or $133/mo for 12months</p>
    </section>
  );
};

export default Hero;
 