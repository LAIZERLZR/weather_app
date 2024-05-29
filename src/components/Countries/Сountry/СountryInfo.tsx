import { Link } from 'react-router-dom';

const СountryInfo = ({ country }: any) => {
  return (
    <div className="flex flex-wrap w-[786px] h-full mx-auto my-6">
      <div className="max-w-[300px] flex justify-center text-center items-center p-2 mb-3 bg-black bg-opacity-50 rounded-lg">
        <Link to={`/countries/${country.cca2}`}>
          <h2 className="text-xl font-bold mb-2 ml-4">{country.name.common}</h2>
        </Link> 
        <img
          className="w-8 h-8 ml-3"
          src={country.coatOfArms.png}
          alt={`Coat of Arms of ${country.name.common}`}
        />
      </div>
      <div className="flex p-6 border-middle_gray_one rounded-lg bg-white bg-opacity-5">
        <div className="w-52 items-center textce">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="mb-2 w-36 h-36"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Name:</strong> {country.name.common}
            </p>
            <p>
              <strong>Official Name:</strong> {country.name.official}
            </p>
            <p>{/* <strong>Capital:</strong> {country.capital[0]} */}</p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Subregion:</strong> {country.subregion}
            </p>
          </div>
          <div>
            <p>
              <strong>Population:</strong> {country.population}
            </p>
            <p>
              <strong>Area:</strong> {country.area} km²
            </p>
            {/* <p>
              <strong>Languages:</strong> {Object.values(country.languages).join(', ')}
            </p>
            <p>
              <strong>Currency:</strong>
              {country.currencies[Object.keys(country.currencies)[0]].name} (
              {country.currencies[Object.keys(country.currencies)[0]].symbol})
            </p>
            <p>
              <strong>Timezone:</strong> {country.timezones[0]}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default СountryInfo;
