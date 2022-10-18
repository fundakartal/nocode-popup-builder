import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  id: number;
  isSelected: boolean;
  show: boolean;
  isCompleted: boolean;
  data: object;
}

const initialState: ModalState = {
  id: 0,
  isSelected: false,
  show: false,
  isCompleted: false,
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
    setIsCompleted: (state, action: PayloadAction<boolean>) => {
      state.isCompleted = action.payload;
    },
  },
});

export const { selectModal, addData, updateData, setShow, setIsCompleted } = modalSlice.actions;
export default modalSlice.reducer;
