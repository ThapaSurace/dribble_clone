import React from "react";

const DeveloperCard = ({ item }) => {
  return (
    <div className=" w-72 h-80 rounded-custom mx-2 overflow-hidden cursor-pointer relative">
      <img
        src={item.img}
        alt="/"
        className="w-full h-full object-cover object-center rounded-md"
      />
      <div className="absolute bottom-4 left-4 text-white text-sm flex flex-col gap-1 tracking-wideS">
        <span>{item.name}</span>
        <span>{item.position}</span>
        <div className="flex gap-1 uppercase">
          {item.skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
