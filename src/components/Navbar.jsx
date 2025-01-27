import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useState } from "react";
const Navbar = ({ footerRef }) => {
  const navbarRef = useRef(null);
  const timelineRef = useRef(null);
  const [openNavbarAnimation, setOpenNavbarAnimation] = useState(false);

  //handle opening and closing of the navbar

  // Create the timeline ONCE, then store it in timelineRef
  useGSAP(() => {
    // Build the timeline and pause it at start
    timelineRef.current = gsap
      .timeline()
      .fromTo(
        navbarRef.current.querySelector(".navbarMainComponent"),
        { opacity: 0, autoAlpha: 0, zIndex: 0 },
        {
          opacity: 1,
          autoAlpha: 1,
          zIndex: 100,
        }
      )
      .fromTo(
        navbarRef.current.querySelectorAll(".navbarItem"),
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1 },
        "<"
      )
      .fromTo(
        navbarRef.current.querySelector(".navbarItemLine"),
        { width: 0 },
        { width: "100%" },
        "<"
      )
      .pause(); // so it doesn't play immediately
  }, []); // IMPORTANT: empty dependency array so we only create once

  useGSAP(
    () => {
      if (footerRef.current) {
        gsap.fromTo(
          navbarRef.current.querySelector(".conceptTitle"),
          { color: "black" },
          {
            color: "white",
            scrollTrigger: {
              trigger: footerRef.current.querySelector(".aMountainOfMystery"),
              toggleActions: "play none none reverse",
              start: "top top",
            },
          }
        );
      }
    },
    { dependencies: [footerRef], scope: footerRef }
  );
  const clickNavbar = () => {
    setOpenNavbarAnimation((prev) => !prev);
  };
  // Now respond to state changes
  useGSAP(() => {
    if (openNavbarAnimation) {
      timelineRef.current.play(); // plays forward
    } else {
      timelineRef.current.reverse(); // reverses
    }
  }, [openNavbarAnimation]); // re-run only when openNavbarAnimation changes
  return (
    <div className="" ref={navbarRef}>
      <div className="fixed top-0 z-50 w-full  text-[white]">
        <div className="flex flex-row justify-between mx-[5%] mt-[10%] md:mt-[5%] text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl text-[black] conceptTitle font-bold">
          <div>
            <p>Concept</p>
          </div>
          <div>
            <p onClick={clickNavbar}>✖</p>
          </div>
        </div>
      </div>

      <div className="fixed top-0 z-[60] w-full h-screen bg-[black] navbarMainComponent">
        <div className="fixed top-0 z-50 w-full h-screen px-[5%] mt-[10%] md:mt-[5%] text-[white] flex flex-col justify-start gap-10 md:gap-0">
          <div className="flex flex-row justify-between  text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl font-bold">
            <div>
              <p>Concept</p>
            </div>
            <div>
              <p onClick={clickNavbar}>✖</p>
            </div>
          </div>

          <div className="flex flex-col justify-start md:justify-evenly md:flex-row md:mt-[10%] h-full gap-10 md:gap-14 xl:24 xxl:gap-48">
            <div className="flex flex-col gap-5 md:gap-8 lg:gap-12 xl:gap-16 xxl:gap-32">
              <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl xxl:text-9xl navbarItem">
                  <a href="">HOME</a>
                </h2>
              </div>
              <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl xxl:text-9xl navbarItem">
                  <a href="https://abrahamnaiborhu.me/">My Portfolio</a>
                </h2>
              </div>
              <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl xxl:text-9xl navbarItem">
                  <a href="https://abrahamnaiborhu.me/monpizza">Monpizza</a>
                </h2>
              </div>
            </div>
            <div className="flex flex-col justify-evenly md:justify-start  gap-5 md:gap-8 lg:gap-12 xl:gap-16 xxl:gap-32">
              <div>
                <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                  <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl navbarItem">
                    Like me? Contact now!
                  </p>
                </div>
                <div className="h-[2px] md:h-[3px] lg:h-[4px] xl:h-[5px] xxl:h-[7px]  w-full bg-[white] navbarItemLine"></div>
              </div>
              <div>
                <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                  <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl navbarItem">
                    <a href="mailto:abrahamnaiborhu@gmail.com">Email</a>
                  </p>
                </div>
                <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                  <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl navbarItem">
                    <a href="https://wa.me/+6281388302150">+62-813-8830-2150</a>
                  </p>
                </div>
              </div>
              <div>
                <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                  <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl navbarItem">
                    <a href="https://www.instagram.com/abraham_pn">Instagram</a>
                  </p>
                </div>
                <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                  <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl navbarItem">
                    <a href="https://linkedin.com/in/abrahamnaiborhu">Linkedin</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
