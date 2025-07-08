import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';




const CoursesSection = ({title, desc, icon, bg, index}) => {
    const targetRef = useRef(null)

    const {scrollYProgress} = useScroll({
        target:targetRef,
        offset: ["start center", "start start"]
    })

    const isSmallScreen = window.innerWidth < 650


    function getRandomNumber() {
        return Math.floor(Math.random() * 11) - 10;
    }

    const randomNum = getRandomNumber();

    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0,randomNum, 5])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], isSmallScreen ? [1,1,1] : [0,1, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0,1, 1])

    console.log(isSmallScreen )

  return (
          <motion.div
            ref={targetRef}
            className="sticky lg:h-[320px] h-max w-full max-w-4xl z-10"
            style={{rotate, top: `${isSmallScreen ? 20 : 130 + index * isSmallScreen ? 0 : 40}px`, scale, opacity,}}
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