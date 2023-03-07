/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterSlice from './filter/filterSlice';
export const store = configureStore({
  reducer: {
    filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
