import { createSlice } from  '@reduxjs/toolkit';
import { fetchUserProfile, registerUser, loginUser, getLoggedInUser } from './userActions';

const initialState = {
  user: null,
  profile: {},
  errorMessage: '',
  token: null,
  isSuccess: false,
  isLoginSuccess: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoginSuccess = false;
      state.isSuccess = false;
      localStorage.removeItem('token')
    }
  },
  extraReducers (builder) {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload
    });
    // register
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.errorMessage = '';
      state.isSuccess = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isSuccess = false;
    });

    // login 
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isLoginSuccess = true
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoginSuccess = false;
    });

    // logged in user
    builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isSuccess = false;
    });
    builder.addCase(getLoggedInUser.rejected, (state, action) => {
      state.errorMessage = action.payload;
    })
  }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;