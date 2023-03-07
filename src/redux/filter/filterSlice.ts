/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterSliceState {
  categoryId: number;
}
const initialState: FilterSliceState = {
  categoryId: -1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filterSlice;

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
