// import dark_weather from '../../assets/dark_weather.jpg';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherHead from './WeatherHead/WeatherCardHead';
import WeatherLine from './WeatherLine/WeatherLine';

const WeatherCard = () => {
  return (
    <div className="bg-cover bg-center w-[1180px] text-light_gray_three py-16 mx-auto mt-5">
      <WeatherHead />
      <div className="flex justify-between w-[990px] h-72 mx-auto mt-4">
        <div className="w-[440px] h-[300px]">
          <h2 className="text-xl mb-4">Weather details</h2>
          <div className="w-full h-full flex flex-wrap justify-between p-3 border border-middle_gray_one rounded-lg bg-white bg-opacity-5">
            <WeatherDetails />
            <WeatherDetails />
            <WeatherDetails />
            <WeatherDetails />
            <WeatherDetails />
            <WeatherDetails />
          </div>
        </div>
        <div className="w-[525px] h-[300px]">
          <h2 className="text-xl mb-4">5-day weather forecast</h2>
          <div className="w-full h-full border border-middle_gray_one rounded-lg bg-white bg-opacity-5 p-4">
            <WeatherLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
