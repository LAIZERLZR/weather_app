import { RootState } from '../store';

export const getAllCountries = (state: RootState) => state.geographicSlice.countries;
