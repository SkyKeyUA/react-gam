/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterSliceState {
  categoryId: number;
  searchValue: string;
}
const initialState: FilterSliceState = {
  categoryId: 0,
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filterSlice;

export const { setCategoryId, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
