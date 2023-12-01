import React from "react";
import Header from "../components/Header";
import DeveloperCardMarquee from "../components/DeveloperCardMarquee";
import Products from "../components/Products";
import CategoryCardMarquee from "../components/CategoryCardMarquee";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <DeveloperCardMarquee />
      <section className="px-6 py-8 md:py-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-center text-slate-900 font-nova_square">
          Explore inspiring designs
        </h1>
        <Products />
      </section>
      <div className="bg-yellow-300/50 py-10 flex justify-center items-center px-4 my-6 lg:h-screen">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 text-center font-nova_square">
            Find your next <br /> designer <br className="sm:hidden" /> today
          </h1>
          <p className="prose text-slate-800 text-center text-lg md:text-xl leading-loose md:max-w-xl tracking-wide">
            The world’s leading brands use Dribbble to hire creative talent.
            Browse millions of top-rated portfolios to find your perfect
            creative match.
          </p>
          <div>
            <button className="bg-slate-900 px-4 py-2 md:py-4 rounded-3xl text-white font-bold text-sm hover:bg-slate-950 mr-4">
              Get started now
            </button>
            <button className="bg-white px-4 py-2 md:py-4 rounded-3xl text-slate-900 font-bold text-sm hover:bg-slate-950 hover:text-white">
              Learn about hiring
            </button>
          </div>
          <div>
            <span className="text-xl">Are you a designer? </span>
            <span className="underline cursor-pointer">Join Dribble</span>
          </div>
        </div>
      </div>
      <div className="my-6 md:my-16">
        <CategoryCardMarquee />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
