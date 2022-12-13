import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  selectedQuiz: null,
  questions: [],
};

export const fetchQuestions = createAsyncThunk('quiz/fetchQuestions', 
  async () => {
    
  }
)

export const QuizesSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setSelectedQuiz: (state, action) => {
      state.selectedQuiz = action.payload;
    }
  }
});

export const { setSelectedQuiz } = QuizesSlice.actions;

export default QuizesSlice.reducer;