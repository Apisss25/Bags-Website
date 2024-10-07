import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../component/Card";
import { cardImage } from "../data/Data";
import { Link } from "react-router-dom";
const ProductSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="mt-[50px] h-screen bg-[#FFFCF5] sm:mt-[50px] md:mt-[0px]">
        <div className="flex items-center justify-between px-[30px] m:px-[50px] sm:px-[80px] md:px-[100px] lg:px-[120px]">
          <h1
            className="font-oswald text-[30px] font-[500] uppercase md:text-[40px] lg:text-[50px]"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            Product
          </h1>
          <Link
            to={"/product"}
            className="group flex flex-col items-center font-popins text-[14px] capitalize md:text-[18px] lg:text-[20px]"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            see more
            <div className="h-[2px] w-0 bg-[#fad38b] transition-all duration-500 group-hover:w-full"></div>
          </Link>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-[20px] py-[30px] max-[375px]:gap-[30px] m:flex-row m:justify-evenly m:gap-[30px] m:px-[30px] m:pt-[50px] md:gap-[50px]">
          {cardImage.map((item) => (
            <div
              key={item.id}
              data-aos={item.dataAos}
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
            >
              <Card image={item.img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
