
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourse(state, action) {
      return action.payload;
    },
  },
});

export const { setCourse } = courseSlice.actions;
export const selectCourse = state => state.course;
export default courseSlice.reducer;
