import React from 'react'
import { motion } from 'framer-motion';
import teachers from '../assets/remove2.png';
import bg from '../assets/bg-hero1.png';
const Teachers = () => {

    const text = "our teachers bring real-world experience into every lesson. With projects that mirror the industry and mentorship that meets you where you are, you’ll learn how to build, debug, and deploy like a pro. No fluff, Just hands-on, job-ready skills"
    
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
     <motion.div
       id='teachers'
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
       viewport={{ once: true }}
       className='w-full lg:h-screen min-h-screen lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-10 px-5 py-10 lg:mt-20 mt-20 relative'
     >
        <div className='w-full flex items-center justify-center'>
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             viewport={{ once: true }}
             className='lg:w-3/4 mx-auto h-full flex flex-col gap-4 items-start justify-center leading-snug'
           >
                 <h4 className='text-lg font-bold text-primary'>Out Teachers</h4>
                <h1 className='lg:text-[50px] text-[30px] text-[#1f2f54] font-bold'>Built by Builders. Taught by Pros.</h1>
               <motion.p
                variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}className='text-[#6e7991] text-lg'>
                    {text.split("").map(char => (
                    <motion.span
                    variants={variants}
                    >{char}
                    </motion.span>
                    ))}

                </motion.p>

                <button className='w-max p-5 rounded-lg bg-[#f74364] px-6 text-white mt-6 font-semibold'>
                    Meet Your Mentors
                </button>
            </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-2/3 w-full lg:h-full h-[600px] relative bg-yellow-200"
        >
            <div className='h-full w-full absolute top-0 right-0 z-30'>
                <img src={teachers} className='h-full w-full object-cover' />
            </div>
            <img src={bg} className='h-1/3 w-[200px] absolute top-1/3 right-[150px] rounded-3xl' />
        </motion.div>
        
    </motion.div>
  )
}

export default Teachers