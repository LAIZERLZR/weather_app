import { createSlice } from '@reduxjs/toolkit';
import { WeatherState } from '../types/types';

const initialState: WeatherState = {
  weather: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeather(state, { payload }) {
      state.weather = payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { addWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
