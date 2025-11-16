import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from 'motion/react';
function Navbar() {
  return (
   <motion.div 
   initial={{
    y:-100
   }}
   animate={{
    y:0
   }}
   transition={{
    duration:0.3
   }}
   className=' fixed top-3 right-150 shadow-xl w-full max-w-3xl mx-auto flex justify-between items-center  font-bold  gradient bg-linear-to-r from-red-300 via-yellow-300 to-green-300 px-4 py-2 rounded-3xl z-120  '>
        <div className='flex items-center gap-3 text-black '>
            <span><FaPenNib></FaPenNib></span>
            <span>Skettrio</span>
            <div>Product</div>
            <div>Explore</div>
            <div>Pricing</div>
        </div>
        <div className='flex gap-4 items-center'>
            <div>Sign In</div>
            <div className='bg-black px-2 py-1 rounded text-white  flex gap-2 items-center'>
                <span>Get Started</span>
                 <span><FaDownload></FaDownload></span></div>
        </div>

    </motion.div>
  )
}

export default Navbar