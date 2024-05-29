import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityInfoType, CountryInfoType, GeographicState } from '../types/types';
import { fetchCountries } from '../api/countriesApi';
import { fetchCities } from '../api/citiesApi';

const initialState: GeographicState = {
  countries: [],
  favoriteCities: [],
  cities: [],
  loadingCountries: false,
  loadingCities: false,
};

const geographicSlice = createSlice({
  name: 'geographic',
  initialState,
  reducers: {
    addFavoriteCity(state, { payload }: PayloadAction<string>) {
      state.favoriteCities.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loadingCountries = true;
      })
      .addCase(fetchCountries.fulfilled, (state, { payload }: PayloadAction<CountryInfoType[]>) => {
        state.loadingCountries = false;
        state.countries = payload;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loadingCountries = false;
      })
      .addCase(fetchCities.pending, (state) => {
        state.loadingCities = true;
      })
      .addCase(fetchCities.fulfilled, (state, { payload }: PayloadAction<CityInfoType[]>) => {
        state.loadingCities = false;
        state.cities = payload;
      })
      .addCase(fetchCities.rejected, (state) => {
        state.loadingCities = false;
      });
  },
});

export const { addFavoriteCity } = geographicSlice.actions;
export default geographicSlice.reducer;
