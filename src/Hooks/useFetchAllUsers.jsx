import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers } from "../redux/ChatSlice";
import axios from "axios";

function useFetchAllUsers() {
    const user = useSelector((state)=>{
        return state.user
    })
    const dispatch = useDispatch()
  useEffect(() => {
    
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/users/all-users", {
          withCredentials: true,
        });
        dispatch(setAllUsers(res.data.users));
      } catch (e) {
        console.log(`error is comming from fetchAllUsers ${e.message}`);
      }
    };
    fetchAllUsers()
  },[user.isAuthenticated]);
}

export default useFetchAllUsers;
