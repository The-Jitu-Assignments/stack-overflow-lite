import { createSlice } from  '@reduxjs/toolkit';
import { fetchUserProfile, registerUser, loginUser } from './userActions';

const initialState = {
  user: null,
  profile: {},
  errorMessage: ''
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
    // register
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.errorMessage = ''
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.errorMessage = action.payload
    });

    // login 
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.errorMessage = action.payload
    })
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;