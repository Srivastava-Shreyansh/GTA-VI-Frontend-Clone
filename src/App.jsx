import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { ReactLenis } from 'lenis/react';

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Bottom from "./components/Bottom";
import SecondPage from "./components/SecondPage";
import JasonSpotlight from "./components/JasonSpotlight";
import LeonidaExplore from "./components/LeonidaExplore";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);

  // Stop scroll during loading/animation
  useEffect(() => {
    if (!showContent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showContent]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -0.6,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onComplete: () => {
        setShowContent(true);
        setTimeout(() => setLoading(false), 100);
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.to(".main-content", { scale: 1, rotate:0, duration: 2, delay: -1, ease: "expo.inOut" });
      gsap.to(".landing .bg", { scale: 1.1, rotate:0, duration: 2, delay: -0.8, ease: "expo.inOut" });
      gsap.to(".landing .text", { scale: 1, rotate:0, duration: 2, delay: -0.8, ease: "expo.inOut" });
      gsap.to(".landing .character", {
        scale: 1,
        xPercent: -50,
        x: 0,
        bottom: "0%",
        rotate:0,
        duration: 2,
        delay: -0.8,
        ease: "expo.inOut"
      });
    });

    mm.add("(min-width: 769px)", () => {
      gsap.to(".main-content", { scale: 1, rotate:0, duration: 2, delay: -1, ease: "expo.inOut" });
      gsap.to(".landing .bg", { scale: 1.1, rotate:0, duration: 2, delay: -0.8, ease: "expo.inOut" });
      gsap.to(".landing .text", { scale: 1, rotate:0, duration: 2, delay: -0.8, ease: "expo.inOut" });
      gsap.to(".landing .character", {
        scale: 1.4,
        xPercent: -50,
        x: 0,
        bottom: "-15%",
        rotate:0,
        duration: 2,
        delay: -0.8,
        ease: "expo.inOut"
      });
    });

    const main = document.querySelector(".main-content");

    gsap.set(".main-content .text", {
      xPercent: -50,
    });
    
    gsap.set(".landing .character", {
      xPercent: -50,
      x: 0,
    });

    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main-content .text", {
        x: xMove * 0.4,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(".main-content .bg", {
        x: xMove * 0.4,
        duration: 1.5,
        ease: "power3.out",
      });
    };

    main?.addEventListener("mousemove", handleMouseMove);

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  return (
    <ReactLenis root>
      <CustomCursor />
      <div className="w-full bg-black min-h-screen text-white overflow-hidden scrollbar-none">
        
        {loading && (
          <div className="svg fixed top-0 left-0 z-[100] flex h-screen w-full items-center justify-center bg-black">
            <svg
              className="h-full w-full"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask id="viMask">
                  <rect
                    x="0"
                    y="0"
                    width="800"
                    height="600"
                    fill="black"
                  />
                  <g className="vi-mask-group">
                    <text
                      x="400"
                      y="300"
                      fontSize="250"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontFamily="Arial Black, Arial, sans-serif"
                    >
                      VI
                    </text>
                  </g>
                </mask>
              </defs>

              <image
                href="/bgupd.png"
                x="0"
                y="0"
                width="800"
                height="600"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#viMask)"
              />
            </svg>
          </div>
        )}

        <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="main-content w-full scale-[1.7] rotate-[15deg] origin-[50%_50vh]">
            <div className="landing relative h-screen w-full overflow-hidden bg-black">
              <NavBar />
              <Hero />
              <Bottom />
            </div>
            {/* Pages are rendered immediately but revealed after animation */}
            <SecondPage />
            <JasonSpotlight />
            <LeonidaExplore />
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;