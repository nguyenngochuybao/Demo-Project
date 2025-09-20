import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./redux/Reducer/userReducer.js";


const store = configureStore( {
    reducer: {
        users: useReducer  
    },
} )

export default store;