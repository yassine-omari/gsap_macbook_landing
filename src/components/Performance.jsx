import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { performanceImages, performanceImgPositions } from "@/constants";
import { useIsTablet } from "@/hooks/useIsTablet";

const toPercentVars = (offsets) =>
  Object.fromEntries(
    Object.entries(offsets).map(([side, value]) => [side, `${value}%`]),
  );

const Performance = () => {
  const sectionRef = useRef(null);
  const isTablet = useIsTablet();
  const prefersReducedMotion = useMediaQuery({
    query: "(prefers-reduced-motion: reduce)",
  });

  useGSAP(
    () => {
      // Without motion, leave the paragraph visible and jump the collage to its final layout.
      if (prefersReducedMotion) {
        if (!isTablet) {
          performanceImgPositions.forEach(({ id, ...offsets }) =>
            gsap.set(`.${id}`, toPercentVars(offsets)),
          );
        }
        return;
      }

      // The paragraph is visible by default in CSS; fromTo hides it only once JS is running.
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      if (isTablet) return;

      const timeline = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach(({ id, ...offsets }) => {
        timeline.to(`.${id}`, toPercentVars(offsets), 0);
      });
    },
    {
      scope: sectionRef,
      dependencies: [isTablet, prefersReducedMotion],
      revertOnUpdate: true,
    },
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map(({ src, id, width, height }) => (
          <Image
            key={id}
            src={src}
            alt=""
            width={width}
            height={height}
            sizes="(max-width: 1023px) 50vw, 840px"
            className={id}
          />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
