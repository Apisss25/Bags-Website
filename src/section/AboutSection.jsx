import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../component/Button";
const AboutSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-evenly bg-[#FFFCF5] md:flex-row md:gap-[10px] lg:gap-[30px] xl:gap-[50px]">
        <div className="pt-[75px] md:pt-0">
          <img
            src="./images/bag-3.jpg"
            alt=""
            className="w-[280px] rounded-[20px] ring-[3px] ring-black ring-offset-[4px] ring-offset-[#FFFCF5] m:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[500px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          />
        </div>
        <div className="pb-[10px] md:pb-[30px]">
          <h1
            className="pb-[10px] text-center font-neue text-[40px] sm:text-[45px] md:text-left md:text-[60px] lg:text-[70px]"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
          >
            ABOUT US
          </h1>
          <article
            className="font-quicksand h-[150px] w-[280px] overflow-scroll rounded-[20px] bg-[#F7F6BB] px-[15px] text-[12px] ring-[3px] ring-black ring-offset-[4px] ring-offset-[#FFFCF5] m:w-[300px] sm:w-[400px] sm:text-[14px] md:h-[180px] md:w-[320px] md:px-[20px] md:pb-[30px] md:text-[16px] lg:h-[230px] lg:w-[450px] xl:h-[250px] xl:w-[500px] xl:overflow-hidden"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-easing="ease-out"
          >
            <p
              className="py-[10px] md:py-[25px]"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              hic fugit est, tenetur facilis quas repellendus exercitationem
              architecto enim doloribus eum illum cum temporibus? Eaque ipsa
              tempora voluptate ipsam unde quae
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              reiciendis officia inventore repudiandae voluptatum reprehenderit
              fuga cum cupiditate ab modi.
            </p>
          </article>
          <div className="flex items-center justify-center pt-[23px] md:justify-start">
            <Button
              title="Explore More"
              link="/more"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
