import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setSelectedUserChats } from '../redux/ChatSlice'
function useFetchChats() {
 const fetchChats= async()=>{
    const dispatch = useDispatch()
     try{
         const res = await axios.get(`http://localhost:3000/api/chat/get-message/${chat.selectedUser._id}`,{
         withCredentials:true
     })
     dispatch(setSelectedUserChats(res.data.chats))
     }
     catch(e){
         console.log(`error is comming from fetchmessage ${e.message}`)
     }
   }
   fetchChats()
}

export default useFetchChats