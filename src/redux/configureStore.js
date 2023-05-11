import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingSlice';

const rootReducer = {
  greet: greetingSlice,
};

const store = configureStore({ reducer: rootReducer });

export default store;
