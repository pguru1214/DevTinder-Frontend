import {configureStore} from "@reduxjs/toolkit"
import userReducer from './userSlice'
import feedUser from "./feedSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedUser
    },
})

export default appStore