import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import intro from '../assets/webdev.png';
import Navbar from '../components/Navbar';
import bg from '../assets/bg-hero1.png';
import { FaCalendarAlt, FaClock, FaLayerGroup, FaBookOpen, FaGlobe, FaPlayCircle, FaUserCircle } from 'react-icons/fa';
import { courses } from '../data';
import SessionCard from '../components/SessionCard';
import { useParams } from 'react-router';

const SingleCourse = () => {
  const params = useParams();
  const singleCourse = courses.find(course => course.title === params.name);

  console.log(params.name)

  useEffect(() => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
},[params])
  return (
    <motion.div className='bg-offwhite' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
    <Navbar />
    <div style={{background: `url(${bg})`}}  className='w-full lg:min-h-screen h-max !bg-cover px-5 lg:px-0 py-10 lg:py-0'>

      <motion.div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:gap-10 gap-5 pt-28 lg:pt-32" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}>
            <div className='w-full  lg:w-2/3 rounded-lg'>
              <h1 className='text-white font-semibold text-3xl lg:text-5xl mb-4'>{singleCourse?.title}</h1>

              <p className="text-white/80 text-shadow-md mb-6">
               {singleCourse?.desc}
              </p>

              <img
                src={singleCourse?.image}
                alt="Introduction to Web Development Banner"
                className="w-full h-[400px] !object-cover lg:rounded-3xl rounded-lg"
              />
            </div>

            <motion.div className='w-full lg:w-2/5 rounded-3xl p-6 flex flex-col justify-between bg-white/90 backdrop-blur-xl border border-white/30 shadow-xl group' initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }} whileHover={{ y: -4, boxShadow: '0px 25px 40px rgba(0,0,0,0.12)' }}>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-center gap-3'><FaLayerGroup className='text-xl text-primary' /><span className='font-medium'>Level:</span> {singleCourse?.level}</li>
                <li className='flex items-center gap-3'><FaClock className='text-xl text-primary' /><span className='font-medium'>Duration:</span>{singleCourse?.Duration}</li>
                <li className='flex items-center gap-3'><FaBookOpen className='text-xl text-primary' /><span className='font-medium'>Lessons:</span> {singleCourse?.lessons}</li>
                <li className='flex items-center gap-3'><FaPlayCircle className='text-xl text-primary' /><span className='font-medium'>Format:</span> Live + Self-paced</li>
                <li className='flex items-center gap-3'><FaGlobe className='text-xl text-primary' /><span className='font-medium'>Language:</span> English</li>
              </ul>

              <div className='mt-6 pt-4 border-t border-gray-200 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <FaUserCircle className='text-4xl text-primary' />
                  <div>
                    <p className='font-semibold text-gray-900 leading-tight'>{singleCourse?.tutor}</p>
                    <p className='text-sm text-gray-500'>Tutor</p>
                  </div>
                </div>

                <motion.button className='px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-transform duration-300' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  Enroll Now
                </motion.button>
              </div>

            </motion.div>
      </motion.div>

    </div>



    <div className="max-w-6xl mx-auto ">

      {/* <div className="w-full lg:w-2/3 rounded-lg p-6"> */}
        <div className="w-full bg-white  rounded-lg mt-6 p-5 ">
          <p className="text-primary mb-6">
              <span className="font-semibold">Technologies:</span> {singleCourse?.teckStack.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Curriculum (1 Month)</h2>
          
          <div className="grid lg:grid-cols-3 gap-7">

            {singleCourse?.curriculum.map((item, idx) => (
              <div key={idx} className="w-full">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.week}</h3>
                <div className="space-y-4">
                  {item.sessions.map((session, i) => (
                    <SessionCard
                      key={i}
                      time={session.time}
                      title={session.title}
                      day={session.day}
                    />
                  ))}
                </div>
              </div>
            ))}

          </div>

        </div>

      {/* </div> */}
    </div>
  </motion.div>
  );
};

export default SingleCourse;