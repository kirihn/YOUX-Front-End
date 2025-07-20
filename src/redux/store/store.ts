import { configureStore } from '@reduxjs/toolkit';
import CurrentUserIdReducer from '../slices/CurrentUserSlice';
import pageIndexReducer from '../slices/pageIndexSlice';

export const store = configureStore({
  reducer: {
    CurrentUserId: CurrentUserIdReducer,
    pageIndex: pageIndexReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
