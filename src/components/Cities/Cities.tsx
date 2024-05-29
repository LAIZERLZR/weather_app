import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getAllCities } from '../../store/selectors/getAllCities';
import { useEffect } from 'react';
import { fetchCities } from '../../store/api/citiesApi';
import Loader from '../Loader/Loader';
import { getAllCitiesLoader } from '../../store/selectors/getAllCitiesLoader';

const Cities = () => {
  const { countryCode } = useParams();
  const dispatch = useAppDispatch();
  const cities = useAppSelector(getAllCities);
  const citiesLoader = useAppSelector(getAllCitiesLoader);

  console.log(cities);

  useEffect(() => {
    if (countryCode) {
      dispatch(fetchCities(countryCode));
    }
  }, [dispatch, countryCode]);

  if (citiesLoader) {
    return <Loader />;
  }

  return <div>123</div>;
};

export default Cities;
