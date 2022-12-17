import { createSlice } from "@reduxjs/toolkit";
import { addAnswer } from "./answerAction";

const initialState = {
  answers: [],
  isSuccess: false,
  answer: null,
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      state.answer = action.payload
    }
  },
  extraReducers (builder) {
    builder.addCase(addAnswer.fulfilled, (state) => {
      state.isSuccess = true
    })
    builder.addCase(addAnswer.rejected, (state) => {
      state.isSuccess = false;
    })
  }
});

export default answersSlice.reducer;