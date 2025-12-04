import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../redux/UserSlice'

function useFetchMyData() {
    const dispatch= useDispatch()
    const user = useSelector((state)=>{
        return state.user
    })
  useEffect(()=>{
    const fetchMyData = async()=>{
        try{
            const res = await axios.get("http://localhost:3000/api/users/my-data",{
                withCredentials:true
            })
            dispatch(setUserData(res.data.data))
        }
        catch(e){
            console.log(`error is comming from fetch my data hook ${e.message}`)
        }
    }
    fetchMyData()
  },[user.isAuthenticated])
}

export default useFetchMyData