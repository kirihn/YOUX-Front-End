import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CurrentUserIdState {
  userId: string;
}

const initialState: CurrentUserIdState = {
  userId: '',
};

export const CurrentUserIdSlice = createSlice({
  name: 'currentUserId',
  initialState,
  reducers: {
    setNewUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    deleteCurrentUserId: (state) => {
      state.userId = '';
    },
  },
});

export const { setNewUserId, deleteCurrentUserId } = CurrentUserIdSlice.actions;

export default CurrentUserIdSlice.reducer;
