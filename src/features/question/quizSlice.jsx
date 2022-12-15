import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  selectedQuiz: null,
  questions: []
};

export const fetchQuestions = createAsyncThunk('quiz/fetchQuestions', 
  async () => {
    const res = await axios.get('http://localhost:8001/question');
    const { data } = res.data;
    return data;
  }
);

export const getQuestion = createAsyncThunk('quiz/getQuestion',
  async (id) => {
    const res = await axios.get(`http://localhost:8001/question/${id}`)
    const { data } = res.data;
    return data
  }
)

export const QuizesSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setSelectedQuiz: (state, action) => {
      state.selectedQuiz = action.payload;
    }
  },
  extraReducers (builder) {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload
    });
    builder.addCase(getQuestion.fulfilled, (state, action) => {
      state.selectedQuiz = action.payload;
    })
  }
});

export const { setSelectedQuiz } = QuizesSlice.actions;

export default QuizesSlice.reducer;