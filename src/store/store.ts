import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import weatherSlice from './slices/weather.slice';
import geographicSlice from './slices/geographic.slice';

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const rootReducer = combineReducers({
  weatherSlice,
  geographicSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
