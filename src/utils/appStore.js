import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'
import feedUser from "./feedSlice"
import connectionsSlice from "./connectionSlice"
import requestsSlice from "./requestSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedUser,
        connection: connectionsSlice,
        request: requestsSlice
    },
})

export default appStore