import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalSclice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: { modalState: modalReducer, userState: userReducer },
});

export default store;
