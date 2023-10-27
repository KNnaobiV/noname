import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/Store/slices/authSlice'
import userReducer from '@/Store/slices/userSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  }
})

export default store