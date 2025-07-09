import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';




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

    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], isSmallScreen ? [0,0,0] : [0,randomRotation, 5])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], isSmallScreen ? [1,1,0.9] : [0,1, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0,1, 1])
   

  return (
          <motion.div
            ref={targetRef}
            className="sticky lg:h-[320px] h-max w-full max-w-4xl z-10"
            style={{rotate, top: `${isSmallScreen ? 100 : 130 + index * isSmallScreen ? 10 : 40}px`, scale, opacity,}}
          >

            <div className="bg-white h-full rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row  border-2 border-gray-100">
              <div className="lg:h-full h-[150px] lg:w-1/3 flex items-center justify-center" style={{ backgroundColor: bg }}>
                {icon}
              </div>

              <div className=" w-full p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{title}</h3>
                  <p className="text-gray-600 text-md leading-relaxed">{desc}</p>
                </div>
                <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-opacity-80 transition w-fit">
                  Enroll Now
                </button>
              </div>

            </div>

          </motion.div>

  );
};

export default CoursesSection;