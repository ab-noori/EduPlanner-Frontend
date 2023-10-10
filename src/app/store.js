import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import reservationsReducer from './features/reservations/reservationsSlice';
import coursesReducer from './features/courses/coursesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
    courses: coursesReducer,
  },
});

export default store;
