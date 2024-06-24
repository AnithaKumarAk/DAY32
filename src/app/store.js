import { configureStore } from "@reduxjs/toolkit";
import totalReducer from "../total/totalSlice";
export default configureStore({
  reducer: {
    total: totalReducer,
  },
});