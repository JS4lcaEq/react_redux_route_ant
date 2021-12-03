import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import StyleControlSlice from '../Slices/StyleControlSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    styleControl: StyleControlSlice.reducer
  }
});
