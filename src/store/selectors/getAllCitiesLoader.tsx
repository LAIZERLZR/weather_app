import { RootState } from '../store';

export const getAllCitiesLoader = (state: RootState) => state.geographicSlice.loadingCities;
