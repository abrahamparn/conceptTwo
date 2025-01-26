import React, { useRef } from "react";
import backgroundVideo from "../assets/video/indonesia_fiveseconds.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  let heroRef = useRef(null);
  useGSAP(
    () => {
      // Use SplitType to split text into words
      const text = new SplitType(".heroDetail", { types: "words" });

      // Wrap each word in a div and apply styles
      const words = text.words;
      words.forEach((word) => {
        const wrapper = document.createElement("div");
        wrapper.style.display = "inline-block"; // Ensure inline layout
        wrapper.style.color = "white"; // Example style
        wrapper.style.clipPath = "polygon(100% 100%, 0 100%, 0 0, 100% 0)";
        word.parentNode.replaceChild(wrapper, word);
        wrapper.appendChild(word); // Move the word into the wrapper
      });
      let timeline = gsap.timeline();
      timeline.fromTo(
        heroRef.current.querySelector(".heroTitle"),
        { x: -400 },
        { x: 0, duration: 1 }
      );
      timeline.fromTo(
        heroRef.current.querySelector(".heroTitleUnderline"),
        { width: 0 },
        { width: "100%", duration: 1 },
        "-=0.5"
      );
      timeline.fromTo(
        heroRef.current.querySelectorAll(".word"),
        { y: 30, opacity: 0 },
        { y: 0, stagger: 0.01, opacity: 1 },
        "<"
      );

      const timelineScrolling = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          markers: true,
          start: "center center",
          scrub: 0.1,
          pin: true,
          pinSpacing: true,
        },
      });
      timelineScrolling.fromTo(
        heroRef.current.querySelector(".heroBoxDetail"),
        {
          y: "200%",
        },
        { y: "-100%", ease: "none" }
      );
      timelineScrolling.fromTo(
        heroRef.current.querySelector(".heroTitle"),
        { y: 0 },
        { y: "-300%" },
        "<"
      );
    },
    { scope: heroRef }
  );
  return (
    <section className="relative min-h-[100dvh] overflow-hidden" ref={heroRef}>
      <video
        src={backgroundVideo}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover z-0"
      />
      <div className=" z-10 relative flex flex-col justify-end ms-center min-h-[100dvh] mx-[5%] md:mx-[10%] ">
        <div className="min-h-[60%] md:h-[60dvh]">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[150px] xxl:text-[250px] text-[white] font-extralight text-left heroTitle">
              A BIT OF{" "}
              <span className=" relative">
                INDONESIA
                <span className="absolute bottom-0 left-0 w-0 h-[5px] md:h-[8px] lg:h-[9px] xl:h-[15px] xxl:h-[23px] bg-[white] heroTitleUnderline"></span>
              </span>
            </h1>
          </div>
          <div className="mt-[20%] xl:mt-[15%] xxl:mt-[12%] mb-[20%] ms-[20%] xl:ms-[40%] pe-5 heroBoxDetail">
            <p className="text-base md:text-2xl lg:text-3xl  xl:text-4xl xxl:text-6xl text-[white] max-w-2xl  xxl:max-w-full xxl:leading-[1.4] heroDetail">
              Experience the diverse cultures, breathtaking landscapes, and unparalleled beauty of
              Indonesia. Join us on a journey through the archipelago's hidden gems and vibrant
              traditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
