import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CountryInfoType } from '../types/types';

export const fetchCountries = createAsyncThunk<CountryInfoType[]>(
  'api/fetchCountries',
  async () => {
    const response = await axios.get<CountryInfoType[]>('https://restcountries.com/v3.1/all');
    return response.data;
  },
);
