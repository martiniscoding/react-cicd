import React from "react";
import { motion } from "motion/react";
function Hero() {
  return (
    <div className="w-screen h-screen   max-w-7xl  mx-auto flex justify-between pt-40 z-110  overflow-x-hidden">
      

      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="absolute -bottom-50   left-0  rounded-tr-[160px] rounded-br-[160px] bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200  shadow-2xl size-140 "
      ></motion.div>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute -top-32 right-0 rounded-bl-[160px] bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200 shadow-2xl size-120"
      ></motion.div>

      <div className="font-black text-8xl flex flex-col z-110 relative ">
        <motion.div
          animate={{
            scaleX: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="bg-red-300 w-full  absolute"
        >
          .
        </motion.div>
        <div className="flex flex-col  ">
          <span className="">Collaborate</span>
          <span className="text-yellow-400"> Draw & Talk </span>
          <span className=" text-green-400 ">As A Team</span>
        </div>

        <motion.span
          animate={{
            rotateZ: 3,
          }}
          transition={{
            duration: 1,
          }}
          className="font-bold text-3xl pl-50 text-red-500"
        >
          {" "}
          now with Video Confrencing !{" "}
        </motion.span>
      </div>
      <div className="flex flex-col mr-25 mt-50 text-xl font-bold z-110">
        <span>Bring your entire team together </span>
        <span>and strategise plans with super smooth</span>
        <span>video confrencing and white board</span>
        <span>- all at one place !</span>
        <div className="flex gap-4 w-full text-sm mt-5">
          <div className="bg-black  text-white w-1/2 px-2 py-2 flex items-center justify-center rounded-sm">
            Get Started For Free
          </div>

          <div className="bg-white border w-1/2 px-2 py-2 flex items-center justify-center rounded-sm">
            Documentation
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
