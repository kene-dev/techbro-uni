import React from 'react'
import { IoReaderOutline } from "react-icons/io5";
import { FaGlobeAmericas, FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from 'motion/react';
import why from "../assets/whyus.png"

const reasons = [
    {
        icon: <IoReaderOutline className='text-primary w-14 h-14 ' />,
        title:'Industry-Relevant Curriculum',
        desc:"Stay up-to-date with modern tools, practices, and frameworks."
    },
    {
        icon: <FaChalkboardTeacher className='text-primary w-14 h-14 ' />,
        title:'Experienced Instructors',
        desc:"Learn from professionals with real-world web development experience."
    },
    {
        icon: <FaGlobeAmericas className='text-primary w-14 h-14 ' />,
        title:'Flexible Online Learning',
        desc:"Study at your own pace from anywhere in the world."
    },
    {
        icon: <FaBriefcase className='text-primary w-14 h-14 ' />,
        title:'Career Readiness',
        desc:"Our goal is to make you job-ready. You'll graduate with practical experience and a portfolio that stands out."
    }

]

const WhyUs = () => {

    const variants = {
        hidden:{
            y:20,
            opacity:0
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:.7,
            }
        }
    }

  return (
    <div className='w-full min-h-screen bg-offwhite lg:px-10 flex flex-col items-center justify-center gap-10 px-5 py-10 lg:mt-20'>
        <div className='flex flex-col text-center'>
            <h4 className='text-lg font-bold text-[#f74364]'>Why Our Courses</h4>
            <h1 className='lg:text-[50px] text-[30px] text-[#1f2f54] font-bold'>What Makes Us Different</h1>
        </div>
        <div className='w-full h-full flex flex-col-reverse lg:flex-row items-start gap-4'>

            <div className='w-full h-full flex flex-col items-end '>

                <div className="lg:w-3/4 w-full h-[480px] rounded-3xl bg-white drop-shadow-2xl lg:p-10 p-5">
                    <img src={why} className='w-full h-full rounded-2xl object-cover' />
                </div>
            </div>

            <motion.div 
            variants={{ visible: { transition: { staggerChildren: 0.6 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{amount:.5, once:true}}
            className='w-full h-full flex flex-col justify-center gap-7'>
                {reasons.map((reason, id) => (
                    <motion.div
                    variants={variants}
                    >
                    <div 
                    key={id}
                    className='w-full lg:w-2/3 flex items-start gap-5 bg-white drop-shadow-2xl rounded-2xl p-4'>
                        {reason.icon}
                        <div clas>
                            <h2 className='text-black text-lg font-semibold'> {reason.title}</h2>
                            <p className='text-sm text-black/60'>
                            {reason.desc}
                            </p>
                        </div>
                    </div>
                    </motion.div>
                ))}
            </motion.div>

         </div>
    </div>
  )
}

export default WhyUs