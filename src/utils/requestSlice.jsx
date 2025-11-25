import { createSlice } from "@reduxjs/toolkit";


const requestSlice = createSlice({
    name: 'request',
    initialState: null,
    reducers: {
        requestUser: (state, action) => {
            return action.payload
        },
        removeUser: (state,action) => {
            const newArray = state.filter((r) => r.id !==action.payload);
            return newArray;
        }

    }
})

export const { requestUser, removeUser } = requestSlice.actions;
export default requestSlice.reducer;