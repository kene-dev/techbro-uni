import React from 'react'
import bg from '../assets/bg-hero1.png';
import about from '../assets/about.jpg';
import { motion } from 'motion/react';

const text = "At Techbro uni, we’re passionate about empowering the next generation of developers. Whether you're a teenager taking your first steps into coding or an adult looking to pivot or upgrade your career, our online web development institute is designed to meet you where you are and guide you to where you want to be."

const About = () => {
    const variants = {
        hidden:{
            y:20,
            opacity:0
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.1,
            }
        }
    }

  return (
    <div className='w-full min-h-screen lg:h-screen flex flex-col lg:flex-row items-start gap-7 lg:my-[100px] mb-20  lg:mb-0'>
        <div className='w-full h-full'>
            <div className="w-full lg:h-full h-max px-5 lg:px-0 py-10 lg:py-0">
                <div className='lg:w-2/3 mx-auto h-full flex flex-col gap-4 items-start justify-center leading-snug'>
                    <h4 className='text-lg font-bold text-primary'>About Us</h4>
                    <h1 className='lg:text-[50px] text-[30px] text-[#1f2f54] font-bold'>The Techbro University mission</h1>
                    <motion.p
                     variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once:true}}
                     className='text-[#6e7991] text-lg'>
                        {text.split("").map(char => (
                            <motion.span
                            variants={variants}
                            >{char}
                            </motion.span>
                        ))}
                    </motion.p>

                    <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className='w-max p-5 rounded-lg bg-primary hover:bg-new-blue duration-300 px-6 text-white mt-6 font-semibold'>
                        Start your Journey
                    </motion.button>
                </div>
            </div>
        </div>

        <div className='w-full h-full lg:px-20 px-8'>
            <div className='w-full h-[500px] lg:h-full !bg-cover bg-top-right !bg-no-repeat flex items-center justify-center lg:rounded-[55px] rounded-4xl' style={{background:`url(${bg})`}}>
                <motion.img 
                initial={{opacity:0, y:20}}
                whileInView={{y:0, opacity:1, transition:{type:'spring',duration:3, ease:'easeInOut', delay:2}}}
                viewport={{once:true}}
                src={about} 
                className='lg:object-cover object-cover w-full !aspect-auto lg:h-2/3 h-3/4  lg:rounded-[55px] rounded-4xl lg:-ml-32 -ml-12 '  />
            </div>
        </div>
    </div>
  )
}

export default About