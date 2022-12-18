import { createSlice } from "@reduxjs/toolkit";
import { addAnswer, addLikeOrDislike, getAnswer } from "./answerAction";

const initialState = {
  answers: [],
  isSuccess: false,
  selectedAnswer: null,
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(addAnswer.fulfilled, (state) => {
      state.isSuccess = true
    })
    builder.addCase(addAnswer.rejected, (state) => {
      state.isSuccess = false;
    })

    // get answer
    builder.addCase(getAnswer.fulfilled, (state, action) => {
      state.selectedAnswer = action.payload
    });

    // like/dislike
    builder.addCase(addLikeOrDislike.fulfilled, (state) => {
      state.isSuccess = true;
    })
    builder.addCase(addLikeOrDislike.rejected, (state) => {
      state.isSuccess = false
    })
  }
});

export default answersSlice.reducer;