import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./UserSlice"
import chatSlice from "./ChatSlice"
export const store = configureStore({
  reducer: {
	 user:userSlice,
   chat:chatSlice
  },
})