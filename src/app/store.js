import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import mainPageReducer from './features/main_page/mainPageSlice';
import courseFormReducer from './features/courses/courseFormSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    mainPage: mainPageReducer,
    courseForm: courseFormReducer,
  },
});

export default store;
