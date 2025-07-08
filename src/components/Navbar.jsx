import React, { useEffect, useState } from 'react'
import  logo from '../assets/logo.png'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`lg:w-[80%] h-[80px] lg:h-[100px] fixed z-30 lg:top-6 top-3 inset-0 mx-auto ${visible ? 'bg-white/40 backdrop-blur-md' : 'bg-transparent'} rounded-[20px] drop-shadow-sm flex items-center justify-between lg:px-10 px-5 duration-300`}>

      <div className='w-max flex items-center'>
        <img src={logo} className='w-20 h-20 -ml-4 lg:-ml-0' />
        <p className='text-xl font-semibold -ml-2'>TechbroUni</p>
      </div>

      <nav className='w-max lg:block hidden'>
        <ul className={`w-full flex items-center gap-10 ${visible ? 'text-black' : 'text-white'}  font-semibold`}>
          <li>Home</li>
          <li>Courses</li>
          <li>Why Us</li>
          <li>Teachers</li>
          <li className='w-max p-2 rounded-lg bg-[#f74364] px-6 text-white'>Contact Us</li>
        </ul>
      </nav>

      <HiOutlineMenuAlt3 className={`${visible ? 'text-[#f74364]' : 'text-[#f74364]'} w-8 h-8 lg:hidden`} />
    </div>
  )
}

export default Navbar