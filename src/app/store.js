import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import StyleControlReducer from '../Slices/StyleControlSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    styleControl: StyleControlReducer
  }
});
