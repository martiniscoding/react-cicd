import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcGoogle } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FaPenNib } from "react-icons/fa";

import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
function Register() {
    const nam="helio"
    const [showPassword,setShowPassword]=useState(false)
    const navigate = useNavigate()
    const [infoDetails,setInfoDetails]= useState({
        username:"",
        email:"",
        password:""
    })
    const handleInputChange=(e)=>{
        setInfoDetails((prev)=>{
            return {
                ...prev,
            [e.target.name]:e.target.value
            }
        })
        console.log(infoDetails)

    }
  return (
    <div className="w-screen h-screen  flex justify-center items-center relative overflow-hidden ">
      <div className=" absolute -right-10  -top-30 bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200 shadow-xl size-100 rounded-bl-[160px]"></div>
      <div className=" absolute -right-10  -top-30 bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200 shadow-xl size-100 rounded-bl-[160px]"></div>
      <div className=" absolute -left-10  -bottom-30 bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200 shadow-xl size-100rounded-tr-[160px] rounded-br-[160px] "></div>
      <div className=" absolute -left-10  -bottom-30 bg-linear-to-bl from-pink-300 via-purple-200 to-yellow-200 shadow-xl size-100 rounded-tr-[160px] rounded-br-[160px] "></div>

      <div className="w-150 h-120  border-pink-300 border rounded-2xl flex flex-col  p-10  bg-linear-to-r from-pink-100 via-purple-100 to-yellow-100 shadow-2xl ">
        <div className=" flex items-center justify-center gap-5">
          <div className="font-normal text-5xl text-center">Register Now !</div>
          <motion.div
            className="w-3"
            animate={{
              scale: [1, 1.5, 2.5],
              rotate: [-90, 10, 270, 360],
            }}
          >
            <FaPenNib className="w-full h-full text-red-400 "></FaPenNib>
          </motion.div>
        </div>
        <div className=" mt-4 flex flex-col gap-3">
          <div className="flex flex-col gap-2 font-light">
            <span>Username </span>
            <input placeholder="must be unique" onChange={handleInputChange}  name="username" type="text" className=" text-sm bg-white rounded-3xl px-3  " />
          </div>
          <div className="flex flex-col gap-2 font-light">
            <span>Email</span>
            <input placeholder="user@gmail.com" onChange={handleInputChange}  name="email" type="text" className="text-sm bg-white rounded-3xl px-3 " />
          </div>
          <div className="flex flex-col gap-2 font-light">
            <span>Password</span>
            <input onChange={handleInputChange}  name="password" type={showPassword?"text":"password"} className=" text-sm bg-white rounded-3xl px-3 " />
          </div>
          <div className="flex gap-2 justify-center items-center w-full py-1 border rounded-2xl ">
            <span className="font-light"> Google </span>
            <FcGoogle className="size-5"></FcGoogle>
          </div>
          <div onClick={()=>{
            navigate("/white")
          }} className="flex gap-2 justify-center items-center w-full py-1 border rounded-2xl">
            <span className="font-light"> Continue As A Guest </span>
            <FcPortraitMode className="size-5"></FcPortraitMode>
          </div>
          <button className=" w-full py-1 bg-linear-to-r from-pink-200 via-purple-200 to-yellow-200 shadow-xl font-md rounded-4xl">
            Register For Free !
          </button>
          <div onClick={()=>{
            navigate("/login")
          }} className="text-sm text-center text-red-500">
            Already Registered ? Sign In Now !
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
