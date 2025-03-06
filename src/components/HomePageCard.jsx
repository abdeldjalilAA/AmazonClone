import React from "react";

const HomePageCard = ({ title, image, descrption }) => {
  return (
    <div className="h-[420px] bg-white z-20 m-3 ">
      <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">{title}</div>
      <div className="h-[300px] m-4">
        <img className="w-[100%] h-[100%] object-cover" src={image} alt="" />
      </div>
      <div className="text-xs xl:text-sm text-blue-400 ml-4 ">{descrption}</div>
    </div>
  );
};

export default HomePageCard;
