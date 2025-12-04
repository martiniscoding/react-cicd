import React, { useEffect, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Whiteboard from "./Pages/WhiteBoard";
import { Toaster } from "sonner";
import Chat from "./Pages/Chat";
import useFetchAllUsers from "./Hooks/useFetchAllUsers";
import useFetchMyData from "./Hooks/useFetchMyData";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import {
  setOnlineUsers,
  updateSelectedUserChats,
} from "./redux/ChatSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });
  const chat = useSelector((state) => {
    return state.chat;
  });
  useFetchMyData();
  useFetchAllUsers();
  

  const socket = useMemo(() => {
    if (!user?.userData) return;
    const s = io("http://localhost:3000", {
      query: {
        userid: user.userData._id,
      },
    });
    //dispatch(setSocket(s))
    return s;
  }, [user.userData]);
  useEffect(() => {
    if (!socket) return;
    socket.on("online-users", (users) => {
      dispatch(setOnlineUsers(users));
    });
    socket.on("send-message", (message) => {
      dispatch(
        updateSelectedUserChats({
          senderId: {
            _id:"jjjf",
            photo:message.senderId.photo
          },
          
          content: message.content,
        })
      );
      console.log(message);
    });
    return () => {
      
      socket.disconnect();
    };
  }, [user.userData,socket]);
  return (
    <div className="overflow-x-hidden">
      <Toaster></Toaster>
      <Routes>
        <Route path="" element={<LandingPage></LandingPage>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/white" element={<Whiteboard></Whiteboard>}></Route>
        <Route path="/chat" element={<Chat></Chat>}></Route>
      </Routes>
    </div>
  );
}

export default App;
