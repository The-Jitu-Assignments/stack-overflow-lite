import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: []
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {}
});

export default commentsSlice.reducer;