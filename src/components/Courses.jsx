import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MdTimer } from "react-icons/md";
import { Link } from 'react-router';


const CoursesSection = ({title, desc, icon, bg, index}) => {
    const targetRef = useRef(null)
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const [randomRotation] = useState(() => Math.floor(Math.random() * 11) - 5);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 650);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const {scrollYProgress} = useScroll({
        target:targetRef,
        offset: ["start center", "start start"]
    })

    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], isSmallScreen ? [0,0,0.9] : [0,randomRotation, 5])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], isSmallScreen ? [1,1,0.9] : [0,1, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], isSmallScreen ? [1,1,1] : [0.5,1, 1])
   

  return (
          <motion.div
            ref={targetRef}
            className="sticky lg:h-[320px] h-max w-full max-w-4xl cursor-pointer z-50"
            style={{rotate, top: `${isSmallScreen ? 100 : 130 + index * isSmallScreen ? 40 : 40}px`, scale, opacity,}}
          >
            <Link to={`singleCourse/${title}`} className="bg-blue-50 h-full rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row  border-2 border-gray-100">
              <div className="lg:h-full h-[150px] lg:w-1/3 flex items-center justify-center" style={{ backgroundColor: bg }}>
                {icon}
              </div>

              <div className="w-full lg:p-12 p-4 py-7  flex-1 flex flex-col justify-between">

                <div>
                  <h3 className="text-3xl font-bold mb-4">{title}</h3>
                  <p className="text-gray-600 text-md leading-relaxed">{desc}</p>
                </div>

                <div className='w-full flex items-center gap-5'>
                  <button className="mt-6 px-6 py-3 bg-transparent border-[1px] border-black text-black rounded-xl hover:bg-opacity-80 transition w-fit">
                    N150,0000
                  </button>

                  <div className=" flex items-center justify-center gap-1 mt-6 px-2 py-3 bg-black text-white  rounded-xl hover:bg-opacity-80 transition w-full lg:w-[150px]">
                    <MdTimer className='text-white w-5 h-5' />
                    <p>1 month</p>
                  </div>
                </div>
              </div>

            </Link>

          </motion.div>

  );
};

export default CoursesSection;