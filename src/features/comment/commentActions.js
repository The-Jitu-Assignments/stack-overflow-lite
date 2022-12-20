import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { fetchQuestions } from "../question/quizActions";

const url = 'http://localhost:8001/comment'

export const addComment = createAsyncThunk('comments/addComment', 
  async(values, { dispatch }) => {
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
      toast.error(error.response.data.msg)
    }
  }
)