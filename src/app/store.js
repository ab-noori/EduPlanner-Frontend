// app/store.js

import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './features/courseSlice'; // Import the course slice

const store = configureStore({
  reducer: {
    course: courseReducer, // Add the course slice to the store
  },
});

export default store;
