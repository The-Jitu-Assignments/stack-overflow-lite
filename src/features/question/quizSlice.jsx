import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { 
  addAQuestion, 
  fetchMostAnsweredQuestions, 
  fetchRecentAskedQuestions, 
  getMyQuestions, 
  searchQuestion 
} from "./quizActions";

const initialState = {
  selectedQuiz: null,
  questions: [],
  isLoading: false,
  isSuccess: false,
  myQuestions: []
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
      state.questions = action.payload
    })

    // most answered questions
    builder.addCase(fetchMostAnsweredQuestions.fulfilled, (state, action) => {
      state.questions = action.payload
    });

    // search questions
    builder.addCase(searchQuestion.fulfilled, (state, action) => {
      state.questions = action.payload
    });

    // specific user questions
    builder.addCase(getMyQuestions.fulfilled, (state, action) => {
      state.myQuestions = action.payload
    })
  }
});

export const { setSelectedQuiz } = QuizesSlice.actions;

export default QuizesSlice.reducer;