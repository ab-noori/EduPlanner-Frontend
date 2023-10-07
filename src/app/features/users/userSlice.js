import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  status: null,
  error: null,
};

export const userSignup = createAsyncThunk('user/signup', async (name) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users', {
      user: {
        name,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to sign up. Please try again.');
  }
});

export const userLogin = createAsyncThunk('user/userLogin', async (name) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/login', { name });
    return response.data;
  } catch (error) {
    throw new Error('Failed to Login up. No user Found!');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSignup.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear any previous errors
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null; // Clear any previous errors
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Use the error message from the rejected action
      })
      // login actions
      .addCase(userLogin.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear any previous errors
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null; // Clear any previous errors
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Use the error message from the rejected action
      });
  },
});

export default userSlice.reducer;
