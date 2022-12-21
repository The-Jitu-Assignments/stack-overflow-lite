import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const url = 'http://localhost:8001/question';

export const getQuestion = createAsyncThunk('quiz/getQuestion',
  async (id) => {
    const res = await axios.get(`${url}/${id}`)
    const { data } = res.data;
    return data
  }
)

export const fetchQuestions = createAsyncThunk('quiz/fetchQuestions',
  async ({pageNumber, pageSize}) => {
    const res = await axios.get(`${url}/all`, {
      params: {
        pageNumber,
        pageSize
      }
    });
    const { newData, total } = res.data.data;
    return { newData, total };
  }
)

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
      dispatch(fetchQuestions({ pageNumber: 1, pageSize: 4 }))
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message)
    }
  }
);

export const fetchRecentAskedQuestions = createAsyncThunk('quiz/fetchRecentAskedQuestions',
  async ({ pageNumber, pageSize }) => {
    const res = await axios.get(`${url}/recent`, {
      params: {
        pageNumber,
        pageSize
      }
    });
    const { data, total } = res.data.data;
    return { data, total };
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
);

export const deleteAQuestion = createAsyncThunk('quiz/deleteAQuestion',
  async (id, { dispatch }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.delete(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { msg } = res.data;
      dispatch(fetchQuestions({ pageNumber: 1, pageSize: 4 }));
      toast.success(msg);
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
)