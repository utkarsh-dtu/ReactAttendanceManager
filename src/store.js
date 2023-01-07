import { configureStore } from "@reduxjs/toolkit";
import { StudentReducer } from "./Reducers/StudentReducer";

const store = configureStore({
  reducer: {
    student: StudentReducer,
  },
});

export default store;
