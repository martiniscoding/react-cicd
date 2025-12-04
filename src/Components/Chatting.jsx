import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedUserChats } from '../redux/ChatSlice'

function Chatting() {
    const [content,setContent]=useState()
    const dispatch = useDispatch()
    const chat = useSelector((state)=>{
        return state.chat
    })
    const user = useSelector((state)=>{
        return state.user 
    })
    const sendMessage = async()=>{
        try{
            const res = await axios.post("http://localhost:3000/api/chat/send-message", {
                id:chat.selectedUser._id,
                content:content
            },{
                withCredentials:true
            }) 
            dispatch(updateSelectedUserChats({
                senderId:{
                    _id:user.userData._id,
                    photo:user.userData.photo
                },
                content:content
            })) 
            setContent("")
        }
        catch(e){
            console.log(`error is comming from send message ${e.message}`)
        }
    }
  return (
    <div className='w-full h-full py-3 flex flex-col px-3   '>
       <div className='flex  w-full justify-center '>
         <div className='py-2 px-3 bg-white w-100 rounded-xl fixed  flex justify-between items-center'>
            <div className=' flex justify-between gap-2 '>
                <img className='size-13 rounded-full' src={chat.selectedUser.photo} alt="" />
                <div className='flex flex-col '>
                    <p>{chat.selectedUser.username}</p>
                    <p>{chat.selectedUser.email}</p>
                </div>
            </div>
            {
                chat.onlineUsers && chat.onlineUsers.includes(user._id)&& (
                    <div className="flex items-center justify-center pr-3">
                <p className="size-3 rounded-full bg-green-500"></p>
              </div>
                )
              }
        </div>
       </div>
        <div className='h-full  mt-20 flex flex-col gap-3 '>
            {
                chat?.selectedUserChats ??  chat?.selectedUserChats?.length >0 ?
               
                chat.selectedUserChats.map((chat)=>{
                    return (
                        <div className={`flex gap-2 ${chat.senderId._id==user.userData._id?`justify-end`:`justify-start`}`}>
                            <img src={chat.senderId.photo} className='size-12 rounded-full' alt="" />
                            <p className='bg-white w-auto px-2 py-1 rounded-3xl flex items-center'>{chat.content}</p>
                        </div>
                    )
                })
               :(
                    <div>
                        Send your first message now 
                    </div>
                )
            }
        </div>
        <div className='  relative  '>
            <input value={content} placeholder='Write ...' onChange={(e)=>{
                setContent(e.target.value)
            }} type="text" className='w-full bg-white mt-3 py-3 px-4 rounded-2xl' />
            <button onClick={sendMessage} className=' px-6 absolute right-1 top-5 py-1  rounded-3xl bg-linear-to-l from-red-200 via-violet-200 to-green-200'>Send </button>
        </div>

    </div>
  )
}

export default Chatting