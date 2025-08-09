import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CoursesSection from '../components/Courses'
import { FaCode, FaPalette, FaLaptopCode } from 'react-icons/fa';
import { motion,} from 'motion/react';
import bg from '../assets/bg-hero1.png';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Teachers from '../components/Teachers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const courses = [
  { title: 'Introduction To Web Development', desc: "Start your web development journey here! Learn HTML for structure, CSS for styling, and JavaScript for interactivity. Gain hands-on experience building real websites and understand how to take your project live. Perfect for beginners, this course gives you the skills to build your first website with confidence and purpose.", icon: <FaCode size={100} color="#fff" />, bg: '#3c5fde' },
  { title: 'Responsive Design', desc: "Discover how to design websites that look amazing on every screen! This course teaches you to create layouts that adapt to phones, tablets, and desktops using modern CSS techniques. Learn about media queries, flexbox, and grids to ensure your website is user-friendly across all devices and screen sizes.", icon: <FaPalette size={100} color="#fff" />, bg: '#fab907' },
  { title: 'Frontend Frameworks', desc: "Take your frontend skills to the next level by learning popular JavaScript frameworks! In this course, you’ll explore how frameworks like React help you build fast, dynamic user interfaces. Learn to manage components, state, and hooks, and understand how modern tools improve your web development workflow.", icon: <FaLaptopCode size={100} color="#fff" />, bg: '#f74364' },
];

const Homepage = () => {
 
  return (
    <div className='w-full h-full lg:min-h-screen'>
       <Navbar />
       <Hero />
        <section
        id='courses'
        className={`min-h-screen  py-24 bg-[#fafbfc] px-6 z-10 lg:mb-[202px] mb-20 lg:mt-0 mt-32 relative`}>
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

         <div className='w-max p-5 rounded-lg bg-[#f74364] px-6 text-white lg:mt-36 mt-16 font-semibold place-self-center'>
            Browse Courses
         </div>
        </section>
        <About />
        <WhyUs />
        <Teachers />
        <Contact />
        <Footer />

    </div>
  )
}

export default Homepage