import { createSlice } from "@reduxjs/toolkit";


const isLoggedIn = localStorage.getItem("isLoggedIn") === "Yes";
const userType = localStorage.getItem("UserType") || null;

const initialState = {
  isLoggedIn,
  userType, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.userType = action.payload.userType;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userType = action.payload.userType; 
      localStorage.setItem("isLoggedIn", "Yes");
      localStorage.setItem("UserType", action.payload.userType);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userType = null;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("UserType");
    },
  },
});

export const { registerSuccess, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
