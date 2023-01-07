import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  studentList: [],
  count: 0,
  StudentExistsError: false,
};

export const StudentReducer = createReducer(initialState, {
  addStudent: (state, action) => {
    state.studentList.push(action.payload);
    state.count++;
  },

  checkoutStudent: (state, action) => {
    for (let i = 0; i < state.studentList.length; i++) {
      if (state.studentList[i].rollNumber === action.payload.rollNumber) {
        state.studentList[i].checkoutTime = action.payload.checkoutTime;
        state.studentList[i].checkedOut = true;
        break;
      }
    }
    state.count--;
  },

  studentExists: (state) => {
    state.StudentExistsError = true;
  },

  clearErrors: (state) => {
    state.StudentExistsError = false;
  },
});
