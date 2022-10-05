import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  id: number;
  isSelected: boolean;
  data: object;
}

const initialState: ModalState = {
  id: 0,
  isSelected: false,
  data: {},
};

export const modalSlice = createSlice({
  name: 'selectedModal',
  initialState,
  reducers: {
    selectModal: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
      state.isSelected = true;
    },
    addData: (state, action: PayloadAction<object>) => {
      state.data = action.payload;
    },
    updateData: (state, action: PayloadAction<object>) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { selectModal, addData, updateData } = modalSlice.actions;
export default modalSlice.reducer;
