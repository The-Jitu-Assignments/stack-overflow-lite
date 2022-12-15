import { createSlice } from  '@reduxjs/toolkit';
import { fetchUserProfile, registerUser, loginUser, getLoggedInUser } from './userActions';

const initialState = {
  user: null,
  profile: {},
  errorMessage: '',
  token: null,
  isSuccess: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
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
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isSuccess = true
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isSuccess = false;
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