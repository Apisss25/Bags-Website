import React from "react";
import Button from "../component/Button";
const MoreSection = () => {
  return (
    <>
      <div className="h-[400px] bg-[#FFFCF5] max-[375px]:mt-[120px] m:mt-[170px] sm:mt-[150px] sm:h-[500px] md:mt-[250px] md:h-[540px] lg:mt-[50px]">
        <div className="flex w-full items-center justify-start bg-[#121713] max-[375px]:h-[280px] max-[375px]:flex-col-reverse m:h-[300px] m:flex-col-reverse md:h-[330px] lg:h-[375px] lg:flex-row xl:gap-[50px]">
          <div className="max-[375px]:mb-[30px] max-[375px]:text-center m:mb-[30px] m:text-center md:mb-[50px] lg:p-[60px] lg:pl-[120px] lg:text-left">
            <h1
              className="py-[15px] font-oswald text-[25px] font-[500] uppercase text-white m:text-[30px] md:text-[40px] lg:text-[45px]"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-easing="ease-in-out"
            >
              get instan discount
            </h1>
            <p
              className="pb-[20px] font-raleway text-[11px] capitalize text-white m:pb-[20px] m:text-[11px] md:text-[14px] lg:pb-[50px] lg:text-[16px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              subscribe our newsletter and get all lastest news about lastest{" "}
              <br /> product,promotions,offers,and discount
            </p>

            <div
              className="flex h-[45px] w-[285px] items-center gap-[15px] rounded-[12px] bg-white px-[10px] max-[375px]:mx-auto m:h-[45px] m:w-[330px] md:h-[60px] md:w-[400px]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              <input
                type="email"
                placeholder="input your email here"
                className="h-[28px] rounded-[5px] px-[10px] ring-[2px] ring-white ring-offset-[5px] ring-offset-black focus:border-black max-[375px]:w-[190px] m:w-[280px] md:h-[38px] md:w-[280px]"
              />
              <Button title="Send" />
            </div>
          </div>

          <img
            src="./images/bag-9.png"
            alt=""
            className="max-[375px]:w-[250px] m:w-[280px] md:w-[380px] lg:w-[420px] xl:w-[430px]"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          />
        </div>
      </div>
    </>
  );
};

export default MoreSection;
