import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const url = 'http://localhost:8001/question';

export const addAQuestion = createAsyncThunk('quiz/addQuiz', 
  async (values, { dispatch }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { msg } = res.data.data;
      toast.success(msg);
      // dispatch()
      return 
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
)