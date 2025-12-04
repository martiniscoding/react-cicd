import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers, setSelectedUser, setSelectedUserChats } from "../redux/ChatSlice";
import Chatting from "../Components/Chatting";

function Chat() {
  const dispatch = useDispatch();
  const chat = useSelector((state) => {
    return state.chat;
  });
const user = useSelector((state)=>{
  return state.user
})
 
  const fetchChats= async()=>{
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
   useEffect(()=>{
    if(!chat.socket) return 
    chat.socket.on("recieved-message",()=>{
        fetchChats()
    })
  },[chat.socket])
  useEffect(()=>{
    if(chat.selectedUser){
        fetchChats()
    }
  },[chat.selectedUser])
  return (
    <div className=" w-screen h-screen  flex">
      <div className="  w-1/5 bg-white pt-5 py-4 px-3 flex flex-col gap-3  ">
        <p className="bg-white border rounded-xl  p-2"><span className="font-bold ">My Username:</span> {user?.userData?.username || "Loading..."}</p>
        <div className="text-2xl font-black ">All Users </div>
        <div>
            <input type="text" className="w-full border rounded-xl py-2 px-1" placeholder="Search " />
        </div>
        <div className="flex flex-col gap-2 ">
          {chat.allUsers && chat.allUsers.length > 0 ? (
            chat.allUsers.map((user)=>{
                return (
                    <div
              onClick={() => {
                dispatch(setSelectedUser(user));
                
              }}
              className="w-full bg-orange-200 py-2 flex  justify-between gap-2 px-2 rounded-xl"
            >
              <div className="flex gap-2 ">
                <img
                  className="size-13 rounded-full "
                  src={user.photo}
                  alt=""
                />
                <div>
                  <p className="font-semibold ">{user.username}</p>
                  <p className="font-light">{user.email}</p>
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
                )
            })
          ) : (
            <div>
                Start Chatting Now !
            </div>
          )}
        </div>
      </div>
      <div className="w-4/5 min-h-screen  overflow-auto flex items-center justify-center bg-linear-to-l from-green-200 via-red-200 to-purple-200">
          {
            chat.selectedUser?(
               <Chatting></Chatting>
            ):(
                <div>
                    Start Chatting 
                </div>
            )
          }
      </div>
    </div>
  );
}

export default Chat;
