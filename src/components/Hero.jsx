import React from 'react'
import bg from '../assets/bg-hero1.png';
import bgGirl from '../assets/hero-boy2.png';

const Hero = () => {
  return (
    <div id='home' className='w-full h-full lg:h-[700px] flex flex-col lg:flex-row items-center  px-5 lg:px-0 mt-20 lg:mt-0'>

        <div className="w-full lg:h-full h-[400px]">
            <div className='lg:w-2/3 mx-auto h-full flex flex-col gap-4 items-start justify-center leading-snug'>
                <h1 className='lg:text-[50px] text-[30px] text-[#1f2f54] font-bold'>Build the Web. Shape the Future.</h1>
                <p className='text-[#6e7991] text-lg'>Learn modern web development from scratch and level up your skills with hands-on projects, expert mentors, and a community that grows with you.</p>

                <button className='w-max p-5 rounded-lg bg-[#f74364] px-6 text-white mt-6 font-semibold'>
                    Explore Courses
                </button>
            </div>
        </div>

        <div style={{background: `url(${bg})`}} className="w-full h-full lg:h-screen !bg-cover bg-no-repeat lg:bg-center bg-bottom p-8 rounded-3xl rounded-bl-[90px] pt-20 z-40">
            <img className='object-contain h-full w-full rounded-bl-2xl' src={bgGirl}/>
        </div>
    </div>
  )
}

export default Hero