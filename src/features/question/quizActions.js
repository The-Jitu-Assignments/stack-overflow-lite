import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { quizValidation } from "../../helpers/quiz/QuizValidation";

const url = 'http://localhost:8001/question';

export const fetchQuestions = createAsyncThunk('quiz/fetchQuestions', 
  async () => {
    const res = await axios.get(url);
    const { data } = res.data;
    return data;
  }
);

export const addAQuestion = createAsyncThunk('quiz/addQuiz', 
  async (values, { dispatch }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { msg } = res.data;
      toast.success(msg);
      dispatch(fetchQuestions())
      return 
    } catch (error) {
      console.log(error)
      toast.error(error.response ? error.response.data.msg : error.message)
    }
  }
)