import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="my-6 md:my-10 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center">
          <span className="text-3xl font-bold font-dancing">Dribbles</span>
          <ul className="flex flex-wrap gap-2 lg:gap-6 font-semibold text-slate-800 text-sm tracking-wide">
            <li>For designers</li>
            <li>Hire talent</li>
            <li>Inspiration</li>
            <li>Advertising</li>
            <li>Blog</li>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>
          <div className="flex gap-2 items-center">
            <Facebook className="text-blue-800" size={25} />
            <Twitter className="text-sky-600" size={25} />
            <Instagram className="text-red-600" size={25} />
            <Linkedin className="text-blue-400" size={25} />
          </div>
        </div>
        <div className="font-extralight text-slate-600 flex flex-col md:flex-row justify-between items-center mt-4 lg:mt-10 text-sm">
          <div className="flex gap-2 lg:gap-4">
            <span>© 2023 Dribbble</span>
            <ul className="flex gap-2">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <ul className="flex gap-2 lg:gap-4 mt-2">
            <li>Jobs</li>
            <li>Designers</li>
            <li>Freelancers</li>
            <li>Tags</li>
            <li>Places</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
