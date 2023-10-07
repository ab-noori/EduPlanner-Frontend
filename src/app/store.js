import { configureStore } from '@reduxjs/toolkit';
import mainPageReducer from './features/mainPageSlice';

const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
  },
});

export default store;
