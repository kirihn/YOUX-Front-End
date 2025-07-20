import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface pageIndexState {
  pageIndex: number;
}

const initialState: pageIndexState = {
  pageIndex: 1,
};

export const pageIndexSlice = createSlice({
  name: 'currentUserId',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.pageIndex += 1;
    },
    backPage: (state) => {
      state.pageIndex -= 1;
    },
    choisePage: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload;
    },
  },
});

export const { nextPage, backPage, choisePage } = pageIndexSlice.actions;

export default pageIndexSlice.reducer;
