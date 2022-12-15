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