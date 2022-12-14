import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpValidation } from "../../helpers/auth/AuthValidation";
import axios from "axios";

const url = 'http://localhost:4000'

export const registerUser = createAsyncThunk('user/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      await signUpValidation(values);
      const res = await axios.post(`${url}/register`, values);
      const { msg } = res.data;
      return msg
    } catch (error) {
      console.log(error.response.data.msg)
      return rejectWithValue(error.res ? error.res.data.msg : error.message)
    }
  }
);

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile',
  async (id) => {
    const res = await axios.get(`http://localhost:4000/profile/${id}`);
    const { data } = res.data;
    return data;
  }
);