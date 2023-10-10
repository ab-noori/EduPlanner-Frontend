import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import mainPageReducer from './features/mainPageSlice';
import courseReducer from './features/courseSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    mainPage: mainPageReducer,
    course: courseReducer,
  },
});

export default store;
