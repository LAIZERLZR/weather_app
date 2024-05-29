export interface CountryInfoType {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [code: string]: string;
  };
  translations: {
    [code: string]: {
      official: string;
      common: string;
    };
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    [lang: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [year: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
}

export interface CityInfoType {
  adminCode1: string;
  lng: string;
  geonameId: number;
  toponymName: string;
  countryId: string;
  fcl: string;
  population: number;
  countryCode: string;
  name: string;
  fclName: string;
  adminCodes1: {
    ISO3166_2: string;
  };
  countryName: string;
  fcodeName: string;
  adminName1: string;
  lat: string;
  fcode: string;
}


export interface WeatherState {
  weather: number[];
}

export interface GeonamesResponse {
  geonames: CityInfoType[];
}

export interface GeographicState {
  countries: CountryInfoType[];
  favoriteCities: string[];
  cities: CityInfoType[],
  loadingCountries: boolean;
  loadingCities: boolean;
}
