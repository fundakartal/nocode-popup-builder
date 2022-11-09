import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  isSelected: boolean;
  show: boolean;
  isCompleted: boolean;
  data: object;
}

const initialState: ModalState = {
  isSelected: false,
  show: false,
  isCompleted: false,
  data: {},
};

export const modalSlice = createSlice({
  name: 'selectedModal',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<object>) => {
      state.isSelected = true;
      state.data = action.payload;
    },
    updateData: (state, action: PayloadAction<object>) => {
      state.data = { ...state.data, ...action.payload };
    },
    setShow: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    setIsCompleted: (state, action: PayloadAction<boolean>) => {
      state.isCompleted = action.payload;
    },
  },
});

export const { addData, updateData, setShow, setIsCompleted } =
  modalSlice.actions;
export default modalSlice.reducer;
