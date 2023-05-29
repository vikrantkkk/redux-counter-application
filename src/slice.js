import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incByValue: (state, action) => state + action.payload
  }
});

export const { increment, decrement, incByValue } = counterSlice.actions;
export default counterSlice.reducer;
