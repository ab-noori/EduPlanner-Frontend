import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
