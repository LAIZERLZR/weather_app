import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CityInfoType, GeonamesResponse } from '../types/types';

export const fetchCities = createAsyncThunk<CityInfoType[], string>(
  'api/fetchCities',
  async (country) => {
    const response = await axios.get<GeonamesResponse>(
      `http://api.geonames.org/searchJSON?country=${country}&maxRows=10&username=inseki`,
    );

    return response.data.geonames;
  },
);
