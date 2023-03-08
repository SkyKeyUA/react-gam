/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterSliceState {
  categoryId: number;
  toggleCatalog: boolean;
}
const initialState: FilterSliceState = {
  categoryId: 0,
  toggleCatalog: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      if (state.categoryId === action.payload) {
        state.toggleCatalog = !state.toggleCatalog;
      } else {
        state.categoryId = action.payload;
        state.toggleCatalog = true;
      }
    },
  },
});

export const selectFilter = (state: RootState) => state.filterSlice;

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
