"use client";
import { Parallax } from "react-parallax";

const HeroThree = () => {
  return (
    <div className="relative">
      <Parallax
        bgImage={"/assets/images/hero/h4.webp"}
        strength={-150}
        bgImageAlt="background"
        bgClassName="object-cover"
        className="relative z-[1] before:content-[''] before:absolute before:inset-0 before:bg-dark-1 before:bg-opacity-50 before:z-[1]"
      >
        <div className="pb-80 lg:pb-24 lg:pt-[260px] pt-48 relative z-3">
          <div className="container">
            <div className="max-w-[900px] mx-auto text-center text-white pb-20 md:pb-28">
              <h1 className="xl:text-7xl lg:text-4xl text-3xl font-semibold leading-1.2 hero-glow-text">
                Find Next Place To Visit.
              </h1>
              <div className="max-w-[700px] mx-auto">
                <p className="lg:text-[25px] md:text-2md text-base pt-4 leading-1.7">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene
                  an commodo ligula eget dolor. Aenean massa. Cum sociis the
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroThree;
