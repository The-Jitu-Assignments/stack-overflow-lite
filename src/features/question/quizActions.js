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
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message)
    }
  }
);

export const fetchRecentAskedQuestions = createAsyncThunk('quiz/fetchRecentAskedQuestions',
  async () => {
    const res = await axios.get(`${url}/recent`);
    const { data } = res.data;
    return data;
  }
);

export const fetchMostAnsweredQuestions = createAsyncThunk('quiz/fetchMostAnsweredQuestions',
  async () => {
    const res = await axios.get(`${url}/quiz/mostAnsweredQn`);
    const { data } = res.data;
    return data; 
  }
);

export const searchQuestion = createAsyncThunk('quiz/searchQuestion',
  async (search) => {
    const res = await axios.get(`${url}/quiz/searchQn`, {
      params: {
        value: search
      }
    });
    const { data } = res.data;
    return data;
  }
);

export const getMyQuestions = createAsyncThunk('quiz/getMyQuestions',
  async (id) => {
    const res = await axios.get(`${url}/myQuestions/${id}`);
    const { data } = res.data;
    return data;
  }
)