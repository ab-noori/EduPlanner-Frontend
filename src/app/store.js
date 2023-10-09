import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import mainPageReducer from './features/mainPageSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    mainPage: mainPageReducer,
  },
});

export default store;
