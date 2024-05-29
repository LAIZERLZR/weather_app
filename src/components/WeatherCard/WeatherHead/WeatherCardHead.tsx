import React from 'react';

const WeatherHead = () => {
  return (
    <div className="flex flex-col justify-between w-[990px] h-72 mx-auto p-16 bg-black bg-opacity-40 rounded-lg  shadow-white shadow-custom">
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-between">
          <h2 className="text-4xl text-title">Moscow</h2>
          <div className="flex justify-between items-end">
            <h1 className="text-7xl text-degree font-medium">61°</h1>
            <span className="text-xl">Overcast</span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-20 text-xl mt-14">
          <div className="flex justify-between w-[120px]">
            <h2>Sun </h2>
            <div className="w-[70px] flex justify-between">
              <span>64°</span>
              <span>62°</span>
            </div>
          </div>
          <span>Air quality : 20 - good</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherHead;
