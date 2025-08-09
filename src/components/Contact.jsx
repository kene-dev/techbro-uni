import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
    id='contact'
      ref={ref}
      className="w-full min-h-screen bg-offwhite lg:px-10 flex flex-col items-center justify-center gap-10 px-5 py-10 lg:mt-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className='lg:text-[50px] text-[30px] text-[#1f2f54] font-bold'
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Get In Touch
      </motion.h1>

      <motion.form
        className="lg:w-2/3 w-full flex flex-col gap-4"
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full flex items-center gap-6">
          <div className="w-full ">
            <input placeholder="Full Name" className="w-full h-[66px] p-4 mt-3 focus:outline-none border-b-[1px] border-new-blue" />
          </div>
          <div className="w-full ">
            <input placeholder="Email" className="w-full h-[66px] p-4 mt-3 focus:outline-none border-b-[1px] border-new-blue" />
          </div>
        </div>

        <div className="w-full flex items-center gap-6">
          <div className="w-full ">
            <input placeholder="Phone: +234" className="w-full h-[66px] p-4 mt-3 focus:outline-none border-b-[1px] border-new-blue" />
          </div>
          <div className="w-full ">
            <input placeholder="Course Title" className="w-full h-[66px] p-4 mt-3 focus:outline-none border-b-[1px] border-new-blue" />
          </div>
        </div>

        <textarea placeholder="Type message Here (optional)" className="w-full h-[90px] p-4 mt-3 focus:outline-none border-b-[1px] border-new-blue" cols={10} rows={10} />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 w-full bg-[#1c52bd] text-white font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;