import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        userData:null,
        isAuthenticated:false
    },
    reducers:{
        setUserData: (state,action)=>{
            state.userData=action.payload
        },
        setIsAuthenticated :(state,action)=>{
            state.isAuthenticated=action.payload
        }
    }
})


export const {setUserData,setIsAuthenticated}= userSlice.actions
export default userSlice.reducer