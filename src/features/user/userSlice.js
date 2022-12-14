import { createSlice } from  '@reduxjs/toolkit';
import { fetchUserProfile, registerUser } from './userActions';

const initialState = {
  user: null,
  profile: {}
};

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
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;