import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
    signupUserDetails: (state,action) => {
      return action.payload
    }
  },
});

export const { addUser, removeUser, signupUserDetails } = userSlice.actions;

export default userSlice.reducer;
