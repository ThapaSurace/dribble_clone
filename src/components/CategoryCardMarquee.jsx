import React from 'react'
import Marquee from "react-fast-marquee";
import Categorylists from './Categorylists';

const CategoryCardMarquee = () => {
  return (
    <Marquee pauseOnHover="true">
      <Categorylists />
    </Marquee>
  )
}

export default CategoryCardMarquee