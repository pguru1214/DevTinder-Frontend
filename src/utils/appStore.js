import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'
import feedUser from "./feedSlice"
import connectionsSlice from "./connectionSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedUser,
        connection: connectionsSlice
    },
})

export default appStore