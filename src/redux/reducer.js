import { createSlice } from "@reduxjs/toolkit";

export const reducer = createSlice({
  name: "employee",
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = reducer.actions;
export default reducer.reducer;
