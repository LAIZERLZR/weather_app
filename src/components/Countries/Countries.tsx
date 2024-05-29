import { ChangeEvent, useEffect, useState } from 'react';
import { fetchCountries } from '../../store/api/countriesApi';
import { useAppDispatch, useAppSelector } from '../../store/store';
import CountryInfo from './Сountry/СountryInfo';
import { CountryInfoType } from '../../store/types/types';
import Loader from '../Loader/Loader';
import { getAllCountries } from '../../store/selectors/getAllCountries';
import { getAllCountriesLoader } from '../../store/selectors/getAllCountriesLoader';
import NotFound from './NotFound/NotFound';

const Countries = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<CountryInfoType[]>([]);
  const dispatch = useAppDispatch();
  const countries = useAppSelector(getAllCountries);
  const countriesLoader = useAppSelector(getAllCountriesLoader);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input: string = event.target.value;
    setSearchTerm(input);
    filterCountries(input);
  };

  const filterCountries = (input: string) => {
    const filtered = countries.filter(
      (country: CountryInfoType) =>
        country.name &&
        country.name.common &&
        country.name.common.toLowerCase().includes(input.toLowerCase()),
    );
    setFilteredCountries(filtered);
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const renderedCountries = (searchTerm === '' ? countries : filteredCountries).map(
    (item: CountryInfoType, index: number) => <CountryInfo key={index} country={item} />,
  );

  if (countriesLoader) {
    return <Loader />;
  }

  let content = null;
  if (searchTerm && renderedCountries.length === 0) {
    content = <NotFound />;
  } else {
    content = renderedCountries;
  }

  return (
    <div className="w-[1180px] text-light_gray_three py-16 mx-auto">
      <div className="w-full h-16 flex justify-center">
        <input
          className="w-2/3 h-full border-none outline-none rounded-2xl bg-black bg-opacity-50 px-6"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {content}
    </div>
  );
};

export default Countries;
