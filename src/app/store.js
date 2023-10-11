import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import reservationsReducer from './features/reservations/reservationsSlice';
import coursesReducer from './features/courses/coursesSlice';
import mainPageReducer from './features/main_page/mainPageSlice';
import courseFormReducer from './features/courses/courseFormSlice';
import courseReducer from './features/courseSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
    courses: coursesReducer,
    mainPage: mainPageReducer,
    courseForm: courseFormReducer,
    course: courseReducer,
  },
});

export default store;
