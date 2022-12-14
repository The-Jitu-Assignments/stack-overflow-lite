import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpValidation } from "../../helpers/auth/AuthValidation";
import axios from "axios";

const url = 'http://localhost:4000'

export const registerUser = createAsyncThunk('user/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      await signUpValidation(values);
      const res = await axios.post(url, values);
      const { msg } = res.data;
      return msg
    } catch (error) {
      return rejectWithValue(error.res.data.msg)
    }
  }
)