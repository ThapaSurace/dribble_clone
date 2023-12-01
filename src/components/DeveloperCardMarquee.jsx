import React from "react";
import Marquee from "react-fast-marquee";
import Developerlists from "./Developerlists";

const CardMarquee = () => {
  return (
    <Marquee pauseOnHover="true">
      <Developerlists />
    </Marquee>
  );
};

export default CardMarquee;
