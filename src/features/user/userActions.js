import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { signInValidation, signUpValidation } from "../../helpers/auth/AuthValidation";

const url = 'http://localhost:4001'

export const registerUser = createAsyncThunk('user/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      await signUpValidation(values);
      const res = await axios.post(`${url}/register`, values);
      const { msg } = res.data;
      toast.success(msg)
      return msg
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message)
      return rejectWithValue(error.response ? error.response.data.msg : error.message)
    }
  }
);

export const loginUser = createAsyncThunk('user/login',
  async (values, { rejectWithValue }) => {
    try {
      await signInValidation(values);
      const res = await axios.post(`${url}/login`, values);
      const { msg, token } = res.data;
      toast.success(msg);
      localStorage.setItem('token', token);
      return { token }
    } catch (error) {
      toast.error(error.response ? error.response.data.msg : error.message)
      return rejectWithValue(error.response ? error.response.data.msg : error.message)
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

export const getLoggedInUser = createAsyncThunk('user/loggedInUser', 
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.get(`${url}/myProfile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { name } = res.data.data;
      return name;
    } catch (error) {
      return rejectWithValue(error.response.data.msg)
    }
  }
)