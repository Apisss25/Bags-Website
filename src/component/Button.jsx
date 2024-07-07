import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { title, link, onClick,height } = props;
  return (
    <button
      className={`hover:scale-[1.1]  bg-[#F2AB37] outline-none md:px-[20px] lg:py-[12px] md:py-[10px] px-[12px] py-[8px] rounded-[8px] text-popins font-bold md:text-[17px] text-[15px] capitalize transition-all duration-150 ease-in-out`}
      onClick={onClick}
      {...props}
    >
      <Link to={link} className="text-black lg:text-[17px] md:text-[15px] font-popins">
        {title}
      </Link>
    </button>
  );
};

export default Button;
