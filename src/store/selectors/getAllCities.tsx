import { RootState } from '../store';

export const getAllCities = (state: RootState) => state.geographicSlice.cities;
