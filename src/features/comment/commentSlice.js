import { createSlice } from "@reduxjs/toolkit";
import { addComment } from "./commentActions";

const initialState = {
  comments: [],
  isSuccess: false
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.isSuccess = true
    });
    builder.addCase(addComment.rejected, (state) => {
      state.isSuccess = false
    })
  }
});

export default commentsSlice.reducer;