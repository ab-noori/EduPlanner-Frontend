// courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  error: null,
};

export const createCourse = createAsyncThunk('courseForm/create', async (courseData) => {
  const formData = new FormData();
  formData.append('course[name]', courseData.name);
  formData.append('course[description]', courseData.description);
  formData.append('course[fee]', courseData.fee);
  formData.append('course[startDate]', courseData.startDate);
  formData.append('course[image]', courseData.image);

  const response = await fetch('http://localhost:3000/api/courses', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Error creating course');
  }

  return response.json();
});

const courseFormSlice = createSlice({
  name: 'courseForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCourse.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default courseFormSlice.reducer;
