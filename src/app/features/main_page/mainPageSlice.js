// mainPageSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMainPage = createAsyncThunk('mainPage/fetch', async () => {
  try {
    const response = await fetch('https://edu-planner-backend.onrender.com/api/courses');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
});

const initialState = {
  courses: [],
  error: '',
  loading: false,
};

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainPage.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchMainPage.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
        state.error = '';
      })
      .addCase(fetchMainPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export const selectMainPage = (state) => ({
  courses: state.mainPage.courses,
  loading: state.mainPage.loading,
  error: state.mainPage.error,
});

export default mainPageSlice.reducer;
