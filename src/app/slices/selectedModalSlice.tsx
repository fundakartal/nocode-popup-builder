import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  id: number;
  isSelected: boolean;
  show: boolean;
  data: object;
}

const initialState: ModalState = {
  id: 0,
  isSelected: false,
  show: false,
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
    setShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
});

export const { selectModal, addData, updateData, setShow } = modalSlice.actions;
export default modalSlice.reducer;
