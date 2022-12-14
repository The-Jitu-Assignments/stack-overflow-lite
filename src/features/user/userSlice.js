import { createSlice, createAsyncThunk } from  '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  profile: {}
};

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile',
  async (id) => {
    const res = await axios.get(`http://localhost:4000/profile/${id}`);
    const { data } = res.data;
    return data;
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers (builder) {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload
    })
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;