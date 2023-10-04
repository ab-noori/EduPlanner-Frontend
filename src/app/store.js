
import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './features/course/courseSlice';

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export default store;
