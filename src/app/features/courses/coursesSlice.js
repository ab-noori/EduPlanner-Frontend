import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  courses: null,
  status: null,
  error: null,
};

export const retrieveCourses = createAsyncThunk('courses/retrieveCourses', async () => {
  const request = await axios.get('http://localhost:3000/api/courses');
  const response = await request.data;
  return response;
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder
      .addCase(retrieveCourses.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(retrieveCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(retrieveCourses.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = null;
      });
  }),
});

export default coursesSlice.reducer;
