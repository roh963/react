// 01 config store import
import  {configureStore} from '@reduxjs/toolkit'
import todoReducer from "./features/todoSlice"

// 02 create  configureStore take the always object
export const store = configureStore({
    //06 step import reducer
    reducer:todoReducer
})