import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'motion/react';
function Footer() {
  return (
    <div
   
     className='bg-[url("/footer.jpg")]  w-full h-70 mt-50 px-70  py-10 flex justify-between overflow-hidden'>
       <div className='bg-white px=3 py-1 rounded-xl w-1/3 flex flex-col'>
        <span className='text-3xl font-black'>Skettrio</span>
       <div className='flex gap-4 mt-3'>
         <span className='text-xl p-2 bg-green-200 rounded-full w-9'><FaGithub></FaGithub></span>
          <span className='text-xl p-2 bg-green-200 rounded-full w-9'><FaLinkedin></FaLinkedin></span>
           <span className='text-xl p-2 bg-green-200 rounded-full w-9'><FaXTwitter></FaXTwitter></span>
            <span className='text-xl p-2 bg-green-200 rounded-full w-9'></span>

       </div>
       

       </div>
       <div className='flex gap-6'>
        <div className='flex flex-col bg-white'>
            <span className='text-xl font-light text-purple-400'>Explore</span>
            <span>abcdef</span>
            <span>abcdef</span>
            <span>abcdef</span>
            <span>abcdef</span>
            <span>abcdef</span>  
        </div>
        <div className='flex flex-col bg-white'>
            <span className='text-xl font-light text-purple-400'>Explore</span>
            <span>abcdef</span>
            <span>abcdef</span>
            <span>abcdef</span>
            <span>abcdef</span>
            <span>abcdef</span>  
        </div>
        <div className='flex flex-col bg-white'>
            <span className='text-xl font-light text-purple-400'>Explore</span>
            <span>abcdef</span>
            <span>abcdef</span>
            <span>abcdef</span>
            <span>abcdef</span>
            <span>abcdef</span>  
        </div>
        <div className='flex flex-col bg-white'>
            <span className='text-xl font-light text-purple-400'>Founders</span>
            <span>Satyam</span>
            <span>Manish</span>
            <span>Mahima</span> 
        </div>
        
       </div>
       


    </div>
  )
}

export default Footer