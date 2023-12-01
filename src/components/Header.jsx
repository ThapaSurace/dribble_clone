import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-[#f8f7f4] py-10 px-2 lg:h-[80vh]">
      <div className="flex flex-col items-center space-y-10">
        <span className="bg-pink-300 rounded-6xl px-6 py-1 font-bold text-[14px] sm:text-base tracking-wide text-slate-800 rounded-3xl bg-opacity-40">
          Over 3 million ready-to-work creatives!
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider text-center md:leading-relaxed font-nova_square">
          Work with the world’s top <br /> creative talent.
        </h1>
        <p className="text-center font-semibold sm:text-xl">
          Connect with millions of top-rated designers & agencies around the
          world.
        </p>
        <button className="bg-slate-900 px-4 py-2 rounded-3xl text-white text-sm hover:bg-slate-950 md:py-3 md:text-lg">
          Start hiring today
        </button>
      </div>
    </div>
  );
};

export default Header;
