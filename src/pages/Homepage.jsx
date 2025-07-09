import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CoursesSection from '../components/Courses'
import { FaCode, FaPalette, FaLaptopCode } from 'react-icons/fa';
import { motion, useScroll, useTransform} from 'motion/react';
import bg from '../assets/bg-hero1.png';

const courses = [
  { title: 'Intro to Web Dev', desc: "Learn the basics of web development in this beginner-friendly course. You'll build web pages using HTML, style them with CSS, and add interactivity with JavaScript. You'll also discover how to host your site online. By the end, you'll have created a complete website and gained essential web development skills.", icon: <FaCode size={100} color="#fff" />, bg: '#3c5fde' },
  { title: 'Responsive Design', desc: "Learn the basics of web development in this beginner-friendly course. You'll build web pages using HTML, style them with CSS, and add interactivity with JavaScript. You'll also discover how to host your site online. By the end, you'll have created a complete website and gained essential web development skills.", icon: <FaPalette size={100} color="#fff" />, bg: '#fab907' },
  { title: 'Frontend Frameworks', desc: "Learn the basics of web development in this beginner-friendly course. You'll build web pages using HTML, style them with CSS, and add interactivity with JavaScript. You'll also discover how to host your site online. By the end, you'll have created a complete website and gained essential web development skills.", icon: <FaLaptopCode size={100} color="#fff" />, bg: '#f74364' },
];



const Homepage = () => {
 
  return (
    <div className='w-full h-full lg:min-h-screen'>
       <Navbar />
       <Hero />

        <section
          className={`min-h-screen  py-24 bg-[#fafbfc] px-6 -z-10 mb-[320px] lg:mt-0 mt-32 relative`}
          >
        <h2 className="text-4xl font-bold text-center mb-2 mt-10">Our Courses</h2>

        <motion.div
        className="max-w-full mx-auto h-max flex flex-col items-center justify-center py-20">
          {
            courses.map((course, i) => (
              <CoursesSection key={i} index={i} {...course} />
            ))
          }
        </motion.div>

        <div className='absolute bottom-1/4 left-0 w-[70px] h-[600px] '>
          <img src={bg} className=' w-full h-full object-cover rounded-r-3xl' />
        </div>
        <div className='absolute bottom-1/6 right-0 w-[50px] h-[300px] '>
          <img src={bg} className=' w-full h-full object-cover rounded-l-3xl' />
        </div>

         <div className='w-max p-5 rounded-lg bg-[#f74364] px-6 text-white lg:mt-36 mt-36 font-semibold place-self-center'>
              Browse Courses
          </div>
        </section>


    </div>
  )
}

export default Homepage