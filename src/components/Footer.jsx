import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const date = new Date()
  return (
    <div className="w-full h-max lg:h-[200px] bg-black flex flex-col items-center justify-center py-10 border-t-[.8px] border-white/60 text-white text-sm">

      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5">

        <div className="w-full flex items-center flex-col lg:items-start lg:justify-center lg:text-left gap-3 lg:px-10">
           <div className='w-max flex items-center'>
                <img src={logo} className='w-20 h-20 -ml-4 lg:-ml-0' />
                <p className='text-xl font-semibold -ml-2'>TechbroUni</p>
           </div>
        </div>

        <div>
            
        </div>

        <div className="w-full flex flex-col items-center lg:items-end lg:justify-center lg:text-right gap-3 lg:px-10">
          <h1>29, Orange Street. Lewiston, ME 04240</h1>
          <h1>(423) 491 6521</h1>
        </div>

      </div>

      <h1>© Copyright {date.getFullYear()} TechbroUni. All Rights Reserved.</h1>

    </div>
  );
};

export default Footer;