import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import mainPageReducer from './features/mainPageSlice';
import reservationsReducer from './features/reservations/reservationsSlice';
import coursesReducer from './features/courses/coursesSlice';
import courseReducer from './features/courseSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
    courses: coursesReducer,
    mainPage: mainPageReducer,
    course: courseReducer,
  },
});

export default store;
