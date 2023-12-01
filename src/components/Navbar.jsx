import React, {useState} from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
   <>
     <div className="flex justify-between px-2 py-4 items-center bg-[#f8f7f4] md:px-6">
      <div className="flex items-center gap-1 md:hidden">
        <Menu className="cursor-pointer" onClick={()=>setOpen(true)} />
        <span className="cursor-pointer text-3xl font-bold font-dancing">Dribbles</span>
      </div>
      <div>
        <ul className="md:flex gap-4 lg:gap-6 text-slate-800 font-semibold hidden">
          <li className="cursor-pointer">Find talent</li>
          <li className="cursor-pointer">Inspiration</li>
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer">Go Pro</li>
        </ul>
      </div>
      <div>
      <span className="cursor-pointer text-3xl font-bold font-dancing hidden md:block">Dribbles</span>
      </div>
      <div className="flex gap-3 items-center">
       <div>
       <input type="text" className="py-2 px-4 rounded-3xl focus:outline-none hidden lg:block" placeholder="Search.." />
       </div>
        <button className="bg-slate-900 px-4 py-2 rounded-3xl text-white font-bold text-sm hover:bg-slate-950">
          Sign up
        </button>
      </div>
    </div>
    <Sidebar open={open} setOpen={setOpen} />
   </>
  );
};

export default Navbar;
