import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import searchReducer from "./SearchSlice";

const Store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
  },
});

export default Store;
