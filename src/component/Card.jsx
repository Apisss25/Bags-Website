import React from "react";

const Card = (props) => {
  const { image } = props;
  return (
    <div className="w-[190px] rounded-lg ring-[2px] ring-black ring-offset-[4px] m:w-[220px] md:w-[250px] lg:w-[270px]">
      <img
        src={image}
        alt=""
        className="h-[220px] w-[190px] rounded-lg object-cover m:h-[270px] m:w-[220px] md:h-[320px] md:w-[250px] lg:h-[350px] lg:w-[270px]"
      />
    </div>
  );
};

export default Card;
