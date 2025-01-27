import React from "react";
import secondVideo from "../assets/video/secondVideo.mp4";
import mountain1 from "../assets/pictures/mountain1.webp";
import mountain2 from "../assets/pictures/mountain2.webp";
const Footer = ({ footerRef }) => {
  return (
    <section className="min-h-screen bg-[black]" ref={footerRef}>
      <video src={secondVideo} loop muted autoPlay playsInline className="w-full" />
      <div className="">
        {/* Content Overlay */}
        <div className="flex flex-col gap-5 xl:gap-10 xxl:gap-20  justify-center xxl:mt-[10%] xxl:justify-start items-start min-h-screen mx-[5%] text-left text-[white] ">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl xxl:text-9xl font-light xl:mt-10">
            A Mountain of Mystery
          </h2>
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl xxl:text-5xl mb-8 xxl:leading-relaxed">
            Standing tall against the horizon, this mountain is a symbol of strength and serenity.
            Its beauty captivates adventurers and dreamers alike, inviting you to explore its untold
            stories and breathtaking landscapes.
          </p>

          {/* Features List */}
          <ul className="space-y-4 xxl:space-y-8 text-left lg:text-xl xl:text-2xl xxl:text-5xl">
            <li className=" items-start gap-5 justify-center ">
              <span className="">✔</span> Awe-inspiring vistas that stretch into the heavens.
            </li>
            <li className=" items-start gap-5 justify-center">
              <span className="">✔</span> A haven for hikers, photographers, and nature lovers.
            </li>
            <li className=" items-start gap-5 justify-center">
              <span className="">✔</span> Untouched beauty that embodies the spirit of adventure.
            </li>
          </ul>

          {/* Optional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xxl:gap-12 mt-12 w-full ">
            <img
              src={mountain1}
              alt="Majestic Mountain 1"
              className="rounded-lg shadow-lg object-cover h-64 xl:h-96 xxl:h-[500px] w-full"
            />
            <img
              src={mountain2}
              alt="Majestic Mountain 2"
              className="rounded-lg shadow-lg object-cover h-64 xl:h-96 xxl:h-[500px] w-full"
            />
          </div>

          {/* Call-to-Action Button */}
          <a href="https://abrahamnaiborhu.me">
            <button className="mt-8 px-6 xxl:px-14 py-3 xxl:py-9 lg:text-xl xl:text-2xl xxl:text-5xl bg-[white] text-[black]  font-bold rounded-lg xxl:rounded-3xl">
              Discover the Unknown
            </button>
          </a>
        </div>
        <div className="flex flex-col justify-end min-h-[100dvh] text-[white] mx-[5%] text-2xl text-start gap-14 font-light lg:text-4xl xl:text-5xl xxl:text-7xl">
          <p>
            For More Information on creating good websites. contact wmdeveloper by clicking this
            link:{" "}
            <a href="https://wmdeveloper.com" className="text-[orange]">
              wmdeveloper.com
            </a>
          </p>
          <div>
            <div className="h-[2px] md:h-[3px] lg:h-[4px] xl:h-[5px] xxl:h-[7px]  w-full bg-[white] navbarItemLine"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly md:justify-start  gap-5 md:gap-8 lg:gap-12 xl:gap-16 xxl:gap-32 pb-10">
            <div className="md:flex md:flex-col">
              <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl navbarItem">
                  <a href="mailto:abrahamnaiborhu@gmail.com">Email</a>
                </p>
              </div>
              <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl  navbarItem">
                  <a href="https://wa.me/+6281388302150">+62-813-8830-2150</a>
                </p>
              </div>
            </div>
            <div>
              <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl  navbarItem">
                  <a href="https://www.instagram.com/abraham_pn">Instagram</a>
                </p>
              </div>
              <div className="" style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl  navbarItem">
                  <a href="https://linkedin.com/in/abrahamnaiborhu">Linkedin</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
