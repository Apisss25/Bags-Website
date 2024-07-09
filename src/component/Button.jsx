import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { title, link, onClick, height } = props;
  return (
    <button
      className={`text-popins rounded-[8px] bg-[#F2AB37] px-[12px] text-[15px] font-bold capitalize outline-none transition-all duration-150 ease-in-out hover:scale-[1.1] max-[375px]:py-[6px] m:py-[8px] md:px-[20px] md:py-[10px] md:text-[17px] lg:py-[12px]`}
      onClick={onClick}
      {...props}
    >
      <Link
        to={link}
        className="font-popins text-black md:text-[15px] lg:text-[17px]"
      >
        {title}
      </Link>
    </button>
  );
};

export default Button;
