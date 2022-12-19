import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { fetchQuestions } from "../question/quizActions";

const url = 'http://localhost:8001/answer'

export const addAnswer = createAsyncThunk('answers/addAnswer', 
  async (values, { dispatch }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const { msg } = res.data;
      toast.success(msg);
      dispatch(fetchQuestions);
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
);

export const getAnswer = createAsyncThunk('answer/getAnswer',
  async (id) => {
    const res = await axios.get(`${url}/${id}`);
    const { data } = res.data;
    return data
  }
)

export const addLikeOrDislike = createAsyncThunk('answer/addLikeOrDislike',
  async (values, { dispatch }) => {
    console.log(values)
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:8001/likes', values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { msg } = res.data;
      dispatch(fetchQuestions())
      return msg
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
)