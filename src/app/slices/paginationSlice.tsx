import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PaginationState {
  currentPage: number;
  modalPerPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  modalPerPage: 12,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setModalPerPage: (state, action: PayloadAction<number>) => {
      state.modalPerPage = action.payload;
    },
  },
});

export const { setCurrentPage, setModalPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;
