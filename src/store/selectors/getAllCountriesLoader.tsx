import { RootState } from '../store';

export const getAllCountriesLoader = (state: RootState) => state.geographicSlice.loadingCountries;
