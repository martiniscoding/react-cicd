import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
    name:"chatSlice",
    initialState:{
        selectedUser:null,
        allUsers:null,
        selectedUserChats:null,
        socket:null,
        onlineUsers:null,
    },
    reducers:{
        setAllUsers :(state,action)=>{
            state.allUsers=action.payload
        },
        setSelectedUser :(state,action)=>{
            state.selectedUser= action.payload
        },
        setSelectedUserChats:(state,action)=>{
            state.selectedUserChats=action.payload
        },
        setSocket:(state,action)=>{
            state.socket=action.payload
        },
        setOnlineUsers : (state,action)=>{
            state.onlineUsers=action.payload
        },
        updateSelectedUserChats:(state,action)=>{
            state.selectedUserChats.push(action.payload)
        }
    }
})

export const {setSelectedUser,setAllUsers,setSelectedUserChats,setSocket,setOnlineUsers,updateSelectedUserChats}= chatSlice.actions
export default chatSlice.reducer