import React, { useEffect } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { dataCard } from "../data/Data";
const ReviewSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="h-[550px] bg-[#FFFCF5] max-[640px]:h-[700px] max-[529px]:mt-[280px] m:mt-[480px] mm:mt-[200px] md:mt-[280px] ml:mt-[0px]">
        <h1
          className="text-center font-oswald text-[40px] font-[500] uppercase md:text-[40px] lg:text-[50px]"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          reviews
        </h1>

        <div
          className="flex items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={5}
            autoplay={{
              delay: "3000",
            }}
            loop={Infinity}
            className="my-swiper"
          >
            {dataCard.map((item) => (
              <SwiperSlide
                className="flex items-center justify-center"
                key={item.id}
              >
                <div
                  key={item.id}
                  className="my-[60px] flex items-center justify-evenly max-[640px]:h-[450px] max-[640px]:max-w-[300px] max-[640px]:flex-col max-[375px]:max-w-[220px] m:max-w-[300px] sm:h-[250px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px]"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover max-[640px]:h-[250px] max-[640px]:w-[250px] sm:h-[250px] sm:w-[250px]"
                  />
                  <div className="w-[600px] bg-[#F7F6BB] px-[60px] py-[50px] max-[640px]:h-[250px] max-[640px]:w-[250px] max-[640px]:px-[20px] max-[640px]:py-[10px] max-[375px]:max-w-[220px] sm:h-[250px]">
                    <h1 className="font-popins text-[23px] font-[600] capitalize max-[375px]:text-[18px]">
                      {item.people}
                    </h1>
                    <p className="py-[15px] font-raleway max-[640px]:py-[5px] max-[375px]:text-[14px]">
                      {item.description}
                    </p>
                    <i className="font-raleway">{item.own}</i>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
