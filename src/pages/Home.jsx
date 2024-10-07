import React, { useEffect } from "react";
import Button from "../component/Button";

import "aos/dist/aos.css";
import AOS from "aos";
import HeroSection from "../section/HeroSection";
import AboutSection from "../section/AboutSection";
import ProductSection from "../section/ProductSection";
import ReviewSection from "../section/ReviewSection";
import MoreSection from "../section/MoreSection";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section id="Home">
        <HeroSection />
      </section>
      <section id="About">
        <AboutSection />
      </section>
      <section id="Product" className="scroll-mt-[80px]">
        <ProductSection />
      </section>
      <section
        id="Review"
        className="scroll-mt-[100px] max-[640px]:scroll-mt-[70px]"
      >
        <ReviewSection />
      </section>
      <section
        id="More"
        className="scroll-mt-[150px] max-[640px]:scroll-mt-[250px]"
      >
        <MoreSection />
      </section>
    </>
  );
};

export default Home;
