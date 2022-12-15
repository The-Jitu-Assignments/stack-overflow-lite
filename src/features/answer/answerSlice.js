import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: []
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {},
  extraReducers: {}
});

export default answersSlice.reducer;