import React, { useEffect, useState } from 'react'
import  logo from '../assets/logo.png'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
} from "../components/ui/sheet"
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const isSingleCourse = location.pathname.includes('/singleCourse');

  console.log(`${location.pathname+location.hash}`)

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

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Courses', id: 'courses' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Teachers', id: 'teachers' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Offset for fixed navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setOpen(false);
  };


  useEffect(() => {
    // When on the homepage and a hash is present (e.g., /#courses),
    // scroll smoothly to that section.
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      // Defer to the next animation frame to ensure the DOM is ready
      requestAnimationFrame(() => scrollToId(id));
    }
  }, [location.pathname, location.hash]);

  return (
    <>
    <div className={`lg:w-[80%] h-[80px] lg:h-[100px] fixed z-[700] lg:top-6 top-3 inset-0 mx-auto ${visible ? 'bg-white/40 backdrop-blur-md' : 'bg-transparent'} rounded-[20px] drop-shadow-sm flex items-center justify-between lg:px-10 px-5 duration-300`}>

      <div className='w-max flex items-center'>
        <img src={logo} className='w-20 h-20 -ml-4 lg:-ml-0' />
        <p className='text-xl font-semibold -ml-2'>TechbroUni</p>
      </div>

      <nav className='w-max lg:block hidden'>
        <ul className={`w-full flex items-center gap-10 ${visible ? 'text-black/60' : 'text-white'}  font-bold`}>
        {navItems.slice('0,2').map((item => {
          if (isSingleCourse) {
              return (
                <li key={item.id} className='w-full'>
                  <Link
                    to={`/#${item.id}`}
                    onClick={() => setOpen(false)}
                         className={`${item.id === "contact" ? 'w-full p-2 rounded-lg bg-[#f74364] px-6 text-white'  : 'w-full text-left font-semibold hover:opacity-80 focus:outline-none'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.id} className='w-full'>
                <button
                  onClick={() => scrollToId(item.id)}
                  className={`${item.id === "contact" ? 'w-max p-2 rounded-lg bg-[#f74364] px-6 text-white'  : 'w-full text-left font-semibold hover:opacity-80 focus:outline-none'}`}
                >
                  {item.label}
                </button>
                </li>
              );
          
}))}
        
          {/* <li>Home</li>
          <li>Courses</li>
          <li>Why Us</li>
          <li>Teachers</li> */}
          {/* <li className='w-max p-2 rounded-lg bg-[#f74364] px-6 text-white'>Contact Us</li> */}
        </ul>
      </nav>

      <HiOutlineMenuAlt3 onClick={() => setOpen(!open)} className={`${visible ? 'text-[#f74364]' : 'text-[#f74364]'} w-8 h-8 lg:hidden`} />
    </div>

     <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side='left' className='z-[999]'>
          <ul className='w-full flex flex-col gap-6 text-[16px] text-black items-start justify-start px-5 py-5'>
           {navItems.map((item) => {

            if (isSingleCourse) {
              return (
                <li key={item.id} className='w-full'>
                  <Link
                    to={`/#${item.id}`}
                    onClick={() => setOpen(false)}
                    className='w-full block text-left font-semibold hover:opacity-80 focus:outline-none'
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.id} className='w-full'>
                <button
                  onClick={() => scrollToId(item.id)}
                  className='w-full text-left font-semibold hover:opacity-80 focus:outline-none'
                >
                  {item.label}
                </button>
                </li>
              );
            })}

          </ul>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Navbar