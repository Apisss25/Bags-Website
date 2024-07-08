import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const OnScroll = () => {
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", OnScroll);
  const ListNav = [
    {
      id: 1,
      title: "Product",
      Link: "/product",
    },

    {
      id: 2,
      title: "Contact",
      Link: "/contact",
    },
    {
      id: 3,
      title: "Service",
      Link: "/service",
    },
    {
      id: 4,
      title: "More",
      Link: "/more",
    },
  ];
  return (
    <nav
      className={`${scroll ? "bg-[#FFFCF5]" : "bg-[#121713] text-white"} fixed left-0 top-0 z-30 w-full shadow-md transition-all duration-200 ease-in-out`}
    >
      <div className="flex items-center justify-between p-[11px] md:p-[13px]">
        <div className="pl-[20px]">
          <h1 className="flex items-center font-popins text-[20px] font-semibold md:text-[23px]">
            <Link
              to={"/Bags-Website"}
              onClick={() => {
                setOpen(false);
              }}
            >
              Bags...
            </Link>
          </h1>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`${scroll ? "text-black" : "text-white"} cursor-pointer pr-[20px] text-[23px] md:hidden`}
        >
          {open ? <HiOutlineX /> : <HiMenuAlt3 />}
        </div>
        <ul
          className={`${
            scroll ? "bg-[#FFFCF5]" : "bg-[#121713]"
          } sm:[top-0] absolute top-[52px] h-screen text-center transition-all duration-200 ease-in md:static md:flex md:h-auto md:w-auto md:items-center md:gap-[50px] md:bg-transparent md:pr-[40px] md:transition-none ${
            open ? "right-0" : "right-[-490px]"
          }`}
        >
          {ListNav.map((link) => (
            <div key={link.id} className="group">
              <li
                className={`px-[80px] py-[30px] md:px-0 md:py-0 md:group-hover:bg-transparent ${scroll ? "border-white group-hover:bg-[#fff3dd]" : "border-none group-hover:bg-[#505050]"} border-[1px] md:border-none`}
              >
                <Link
                  to={link.Link}
                  onClick={() => setOpen(!open)}
                  className="font-md font-popins text-[12px] group-hover:font-black md:text-[14px] lg:text-[16px]"
                >
                  {link.title}
                  <div className="h-[2px] w-0 bg-[#fad38b] transition-all duration-500 group-hover:w-full"></div>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
