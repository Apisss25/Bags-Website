import React from "react";
import { ListFooter1, ListFooter2 } from "../data/Data";
const Footer = () => {
  return (
    <section className="bg-[#FFFCF5]">
      <div className="flex items-start justify-evenly pb-[50px]">
        <h1 className="font-popins text-[20px] font-bold m:text-[22px] sm:text-[25px] md:text-[28px] lg:text-[30px]">
          Bags...
        </h1>
        <div className="text-center">
          <h1 className="font-popins text-[14px] font-[700] capitalize m:text-[15px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
            menu
          </h1>
          {ListFooter1.map((item) => (
            <ul key={item.id} className="pt-[5px]">
              <li className="cursor-pointer py-[7px] font-raleway text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                {item.list}
              </li>
            </ul>
          ))}
        </div>
        <div className="text-center">
          <h1 className="font-popins text-[14px] font-[700] capitalize m:text-[15px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
            connect
          </h1>
          {ListFooter2.map((item) => (
            <ul key={item.id} className="pt-[5px]">
              <li className="cursor-pointer py-[7px] font-raleway text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                {item.list}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="text-center">
        <p className="cursor-pointer py-[7px] font-raleway text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
          BagsOlshop@gmail.com
        </p>
        <p className="cursor-pointer py-[20px] font-raleway text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
          © 2022. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
