import React from "react";

const ListFooter1 = [
  {
    id: 1,
    list: "Services",
  },
  {
    id: 2,
    list: "Works",
  },
  {
    id: 3,
    list: "About",
  },
  {
    id: 4,
    list: "Contact",
  },
];
const ListFooter2 = [
  {
    id: 1,
    list: "Linkdin",
  },
  {
    id: 2,
    list: "Facebook",
  },
  {
    id: 3,
    list: "Twitter",
  },
  {
    id: 4,
    list: "Instagram",
  },
];

const ListFooter3 = [
  {
    id: 1,
    list: "blablabla@gmail.com",
  },
];
const Footer = () => {
  return (
    <section className="bg-[#FFFCF5]">
      <div className="flex items-start justify-evenly pb-[80px]">
        <h1 className="font-popins text-[28px] font-[700]">bags.</h1>
        <div className="text-center">
          <h1 className="font-popins text-[24px] font-[700] capitalize">
            menu
          </h1>
          {ListFooter1.map((item) => (
            <ul key={item.id} className="pt-[5px]">
              <li className="py-[7px] font-raleway text-[18px]">{item.list}</li>
            </ul>
          ))}
        </div>
        <div className="text-center">
          <h1 className="font-popins text-[24px] font-[700] capitalize">
            connect
          </h1>
          {ListFooter2.map((item) => (
            <ul key={item.id} className="pt-[5px]">
              <li className="py-[7px] font-raleway text-[18px]">{item.list}</li>
            </ul>
          ))}
        </div>
        <div className="text-center">
          <h1 className="font-popins text-[24px] font-[700] capitalize">
            connect
          </h1>
          {ListFooter3.map((item) => (
            <ul key={item.id} className="pt-[5px]">
              <li className="py-[7px] font-raleway text-[18px]">{item.list}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
