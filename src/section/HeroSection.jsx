import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../component/Button";
const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="flex h-screen flex-col-reverse items-center justify-evenly bg-[#121713] md:flex-row md:justify-evenly">
        <div className="px-[30px] md:px-[80px] lg:px-[130px]">
          <h1
            className="py-[10px] font-oswald text-[28px] font-[600] uppercase text-white md:pb-[20px] md:text-[45px] md:font-[600] lg:text-[75px]"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-easing="ease-out"
          >
            shop your favourite <br />{" "}
            <span className="text-[#F3A836]">stylish</span> bags
          </h1>
          <p
            className="pb-[15px] font-raleway text-[13px] capitalize text-white md:pb-[30px] lg:text-[18px]"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-easing="linear"
          >
            discover top designer bags on bags. belts bags, backpacks,duffle
            bags , work bags,luggage,and tote bags, worldwide shipping.
          </p>
          <Button
            title="explore more"
            link="/ExploreMore"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
            data-aos-easing="ease-out"
          />
        </div>
        <div className="relative pt-[50px] md:pr-[100px]">
          <img
            src="./images/bag-hero-1.jpg"
            alt=""
            className="h-[180px] w-[180px] rounded-[20px] object-cover ring-[3px] ring-white ring-offset-[6px] ring-offset-black m:h-[220px] m:w-[150px] sm:h-[250px] sm:w-[180px] md:h-[320px] md:w-[400px] lg:h-[450px] lg:w-[600px]"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos-easing="ease-out"
          />
          <img
            src="./images/bag-hero-2.jpg"
            alt=""
            className="absolute -bottom-[40px] -left-[50px] hidden size-[100px] rounded-[20px] border-[3px] border-slate-100 md:-bottom-[50px] md:-left-[80px] md:block md:size-[150px] lg:size-[200px]"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="800"
            data-aos-easing="ease-out"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
