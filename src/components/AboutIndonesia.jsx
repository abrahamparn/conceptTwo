import React, { useReducer, useRef } from "react";
import img1 from "../assets/pictures/picture1.webp";
import img2 from "../assets/pictures/picture2.webp";
import img3 from "../assets/pictures/picture3.webp";
import img4 from "../assets/pictures/picture4.webp";
import img5 from "../assets/pictures/picture5.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutIndonesia = () => {
  const contentRef = useRef(null);
  let mm = gsap.matchMedia();

  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current.querySelectorAll(".contentAnimation"),
        { y: 200 },
        {
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current.querySelector(".contentTitleTrigger"),
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      let contentPictureCaption = gsap.utils.toArray(".contentPictureCaptionTrigger");
      contentPictureCaption.forEach((item, index) => {
        gsap.fromTo(
          item.querySelector(".contentPictureCaption"),
          { width: "75%", opacity: 0 },
          {
            width: "100%",
            opacity: 0.8,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "70% 80%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          }
        );
      });

      mm.add("(min-width: 768px)", () => {
        // Put your code that should ONLY run at >=768px
        gsap.fromTo(
          contentRef.current.querySelector(".contentPictureAnimation"),
          { y: 20 },
          {
            y: -50,
            scrollTrigger: {
              trigger: contentRef.current.querySelector(".contentPictureAnimation"),
              start: "top bottom",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          contentRef.current.querySelector(".contentPictureAnimationGoSmall"),
          { width: "95%" },
          {
            width: "100%",
            scrollTrigger: {
              trigger: contentRef.current.querySelector(".contentPictureAnimationGoSmall"),
              start: "top 70%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: contentRef }
  );
  return (
    <section className="relative min-h-[100dvh] overflow-hidden" ref={contentRef}>
      <section className="py-32 bg-white text-main_color mx-[5%] flex flex-col gap-8">
        <div
          className=" w-full text-left flex flex-col gap-6 md:mb-20 contentTitleTrigger"
          style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl xxl:text-[180px] font-extralight contentAnimation">
            A Land of Endless Stories
          </h2>
        </div>

        <div className=" mx-auto text-left flex flex-col gap-6 md:gap-12 xxl:gap-24 md:flex-row md:justify-evenly">
          <div className="flex flex-col gap-8 md:gap-24 xxl:gap-48 md:w-1/2">
            <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-5xl font-light opacity-80 inline-block contentAnimation">
                Indonesia is an archipelago of 17,000 islands, each with its unique character,
                traditions, and landscapes.
              </p>
            </div>
            <div className="w-full flex flex-col items-center contentPictureCaptionTrigger">
              <img
                src={img2}
                className="h-96 xl:h-[500px] xxl:h-[750px] w-[450px] lg:w-full object-cover contentPictureAnimationGoSmall"
              />
              <div className="flex flex-row justify-between opacity-60 text-sm xl:text-lg xxl:text-3xl contentPictureCaption">
                <p>pretty</p>
                <p>amazing</p>
              </div>
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-5xl font-light opacity-80 ">
                From the tranquil beaches of Bali to the bustling streets of Jakarta, every journey
                is an adventure. Discover the heritage, flavors, and wonders that make Indonesia a
                destination like no other.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 md:gap-8 lg:gap-12 xxl:gap-24 md:flex-col md:w-1/2 contentPictureAnimation">
            <div className="w-full flex flex-col items-center contentPictureCaptionTrigger">
              <img
                src={img3}
                className="h-96 w-[450px] xxl:h-[500px] lg:w-full  md:h-64 xl:h-80 object-cover"
              />
              <div className="flex flex-row justify-between opacity-60 text-sm xl:text-lg xxl:text-3xl w-10 contentPictureCaption">
                <p>beauty</p>
                <p>perfect</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center contentPictureCaptionTrigger">
              <img
                src={img4}
                className="h-96 w-[450px] xxl:h-[500px] lg:w-full md:h-64 xl:h-80 object-cover"
              />
              <div className="flex flex-row justify-between opacity-60 text-sm xl:text-lg xxl:text-3xl contentPictureCaption">
                <p>sexy</p>
                <p>hot</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center contentPictureCaptionTrigger">
              <img
                src={img5}
                className="h-96 w-[450px] xxl:h-[500px] lg:w-full md:h-64 xl:h-80 object-cover"
              />
              <div className="flex flex-row justify-between opacity-60 text-sm xl:text-lg xxl:text-3xl contentPictureCaption">
                <p>aluring</p>
                <p>grace</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-5 md:mt-10 xxl:mt-24">
          <button className="bg-[black] w-44 md:w-60 xl:w-72 xxl:w-[500px] h-7 md:h-12 xl:h-14 xxl:h-24 rounded-3xl xl:rounded-full hover:bg-[white] border border-[black]">
            <div className="text-[white] text-sm md:text-xl xl:text-2xl xxl:text-5xl hover:text-[black] ">
              view all picture
            </div>
          </button>
        </div>
      </section>
    </section>
  );
};

export default AboutIndonesia;
