import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { 
  addAQuestion, 
  fetchMostAnsweredQuestions, 
  fetchRecentAskedQuestions, 
  getMyQuestions, 
  searchQuestion,
  fetchQuestions,
  getQuestion,
  deleteAQuestion
} from "./quizActions";

const initialState = {
  selectedQuiz: null,
  questions: [],
  isLoading: false,
  isSuccess: false,
  myQuestions: [],
  total: 0
};


export const QuizesSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload.newData,
      state.total = action.payload.total
    });
    builder.addCase(getQuestion.fulfilled, (state, action) => {
      state.selectedQuiz = action.payload;
    });
    builder.addCase(addAQuestion.fulfilled, (state) => {
      state.isLoading = false
      state.isSuccess = true;
    });
    builder.addCase(addAQuestion.pending, (state) => {
      state.isLoading = true
    });
    builder.addCase(addAQuestion.rejected, (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    });

    // recent questions
    builder.addCase(fetchRecentAskedQuestions.fulfilled, (state, action) => {
      state.questions = action.payload.data
    })

    // most answered questions
    builder.addCase(fetchMostAnsweredQuestions.fulfilled, (state, action) => {
      state.questions = action.payload
    });

    // search questions
    builder.addCase(searchQuestion.fulfilled, (state, action) => {
      state.questions = action.payload
    });
    builder.addCase(searchQuestion.rejected, (state, action) => {
      state.questions = action.payload
    })

    // specific user questions
    builder.addCase(getMyQuestions.fulfilled, (state, action) => {
      state.myQuestions = action.payload
    });

    // delete question
    builder.addCase(deleteAQuestion.fulfilled, (state) => {
      state.isSuccess = true
    });
    builder.addCase(deleteAQuestion.rejected, (state) => {
      state.isSuccess = false
    })
  }
});


export default QuizesSlice.reducer;