import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import reservationsReducer from './features/reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
  },
});

export default store;
