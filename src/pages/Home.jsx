import React from "react";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import Card from "../component/Card";
import { dataCard, cardImage } from "../data/Data";
import { FaArrowRight } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
      <section id="Home">
        <div className="flex h-screen flex-col-reverse items-center justify-evenly bg-[#121713] md:flex-row md:justify-evenly">
          <div className="px-[30px] md:px-[80px] lg:px-[130px]">
            <h1 className="py-[10px] font-oswald text-[28px] font-[600] uppercase text-white md:pb-[20px] md:text-[45px] md:font-[600] lg:text-[75px]">
              shop your favourite <br />{" "}
              <span className="text-[#F3A836]">stylish</span> bags
            </h1>
            <p className="pb-[15px] font-raleway text-[13px] capitalize text-white md:pb-[30px] lg:text-[18px]">
              discover top designer bags on bags. belts bags, backpacks,duffle
              bags , work bags,luggage,and tote bags, worldwide shipping.
            </p>
            <Button title="explore more" link="/ExploreMore" />
          </div>
          <div className="relative pt-[50px] md:pr-[100px]">
            <img
              src="./public/images/bag-hero-1.jpg"
              alt=""
              className="h-[180px] w-[180px] rounded-[20px] object-cover ring-[3px] ring-white ring-offset-[6px] ring-offset-black m:h-[220px] m:w-[150px] sm:h-[250px] sm:w-[180px] md:h-[320px] md:w-[400px] lg:h-[450px] lg:w-[600px]"
            />
            <img
              src="./public/images/bag-hero-2.jpg"
              alt=""
              className="absolute -bottom-[40px] -left-[50px] hidden size-[100px] rounded-[20px] border-[3px] border-slate-100 md:-bottom-[50px] md:-left-[80px] md:block md:size-[150px] lg:size-[200px]"
            />
          </div>
        </div>
      </section>
      <section id="About">
        <div className="flex h-screen flex-col items-center justify-evenly bg-[#FFFCF5] md:flex-row md:gap-[10px] lg:gap-[30px] xl:gap-[50px]">
          <div className="pt-[75px] md:pt-0">
            <img
              src="./public/images/bag-3.jpg"
              alt=""
              className="w-[280px] rounded-[20px] ring-[3px] ring-black ring-offset-[4px] ring-offset-[#FFFCF5] m:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[500px]"
            />
          </div>
          <div className="pb-[10px] md:pb-[30px]">
            <h1 className="pb-[10px] text-center font-neue text-[40px] sm:text-[45px] md:text-left md:text-[60px] lg:text-[70px]">
              ABOUT US
            </h1>
            <article className="font-quicksand h-[150px] w-[280px] overflow-scroll rounded-[20px] bg-[#F7F6BB] px-[15px] text-[12px] ring-[3px] ring-black ring-offset-[4px] ring-offset-[#FFFCF5] m:w-[300px] sm:w-[400px] sm:text-[14px] md:h-[180px] md:w-[320px] md:px-[20px] md:pb-[30px] md:text-[16px] lg:h-[230px] lg:w-[450px] xl:h-[250px] xl:w-[500px] xl:overflow-hidden">
              <p className="py-[10px] md:py-[25px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
                hic fugit est, tenetur facilis quas repellendus exercitationem
                architecto enim doloribus eum illum cum temporibus? Eaque ipsa
                tempora voluptate ipsam unde quae
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                reiciendis officia inventore repudiandae voluptatum
                reprehenderit fuga cum cupiditate ab modi.
              </p>
            </article>
            <div className="flex items-center justify-center pt-[23px] md:justify-start">
              <Button title="Explore More" link="/more" />
            </div>
          </div>
        </div>
      </section>
      <section id="Product" className="scroll-mt-[80px]">
        <div className="mt-[50px] h-screen bg-[#FFFCF5] sm:mt-[50px] md:mt-[0px]">
          <div className="flex items-center justify-between px-[30px] m:px-[50px] sm:px-[80px] md:px-[100px] lg:px-[120px]">
            <h1 className="font-oswald text-[30px] font-[500] uppercase md:text-[40px] lg:text-[50px]">
              Product
            </h1>
            <Link
              to={"/product"}
              className="group flex flex-col items-center font-popins text-[14px] capitalize md:text-[18px] lg:text-[20px]"
            >
              see more
              <div className="h-[2px] w-0 bg-[#fad38b] transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-[20px] py-[30px] max-[375px]:gap-[30px] m:flex-row m:justify-evenly m:gap-[30px] m:px-[30px] m:pt-[50px] md:gap-[50px]">
            {cardImage.map((item) => (
              <div key={item.id}>
                <Card image={item.img} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="Review"
        className="scroll-mt-[100px] max-[640px]:scroll-mt-[70px]"
      >
        <div className="h-[550px] bg-[#FFFCF5] max-[640px]:h-[700px] max-[529px]:mt-[280px] m:mt-[480px] mm:mt-[200px] md:mt-[280px] ml:mt-[0px]">
          <h1 className="text-center font-oswald text-[40px] font-[500] uppercase md:text-[40px] lg:text-[50px]">
            reviews
          </h1>

          <div className="flex items-center justify-center">
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
      </section>
      <section
        id="More"
        className="scroll-mt-[150px] max-[640px]:scroll-mt-[250px]"
      >
        <div className="h-[400px] sm:h-[500px] md:h-[540px] bg-[#FFFCF5] max-[375px]:mt-[120px] m:mt-[170px] sm:mt-[150px] md:mt-[250px] lg:mt-[50px]">
          <div className="flex w-full items-center justify-start bg-[#121713] max-[375px]:h-[280px] max-[375px]:flex-col-reverse m:h-[300px] m:flex-col-reverse md:h-[330px] lg:h-[375px] lg:flex-row xl:gap-[50px]">
            <div className="max-[375px]:mb-[30px] max-[375px]:text-center m:mb-[30px] m:text-center md:mb-[50px] lg:p-[60px] lg:pl-[120px] lg:text-left">
              <h1 className="py-[15px] font-oswald text-[25px] font-[500] uppercase text-white m:text-[30px] md:text-[40px] lg:text-[45px]">
                get instan discount
              </h1>
              <p className="pb-[20px] font-raleway text-[11px] capitalize text-white m:pb-[20px] m:text-[11px] md:text-[14px] lg:pb-[50px] lg:text-[16px]">
                subscribe our newsletter and get all lastest news about lastest{" "}
                <br /> product,promotions,offers,and discount
              </p>

              <div className="flex h-[45px] w-[285px] items-center gap-[15px] rounded-[12px] bg-white px-[10px] max-[375px]:mx-auto m:h-[45px] m:w-[330px] md:h-[60px] md:w-[400px]">
                <input
                  type="email"
                  placeholder="input your email here"
                  className="h-[28px] rounded-[5px] px-[10px] ring-[2px] ring-white ring-offset-[5px] ring-offset-black focus:border-black max-[375px]:w-[190px] m:w-[280px] md:h-[38px] md:w-[280px]"
                />
                <Button title="Send" />
              </div>
            </div>

            <img
              src="./public/images/bag-9.png"
              alt=""
              className="max-[375px]:w-[250px] m:w-[280px] md:w-[380px] lg:w-[420px] xl:w-[430px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
