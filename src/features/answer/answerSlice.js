import { createSlice } from "@reduxjs/toolkit";
import { addAnswer, getAnswer } from "./answerAction";

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
    })
  }
});

export default answersSlice.reducer;