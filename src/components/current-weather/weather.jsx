/* eslint-disable react/prop-types */

const Weather = ({data}) => {
  
  const date = new Date(data.dt*1000)
  const day = date.toLocaleDateString(undefined, { weekday: 'long' });
  const time = date.toLocaleTimeString();
  
  return (
    <>
      <div className="w-full bg-gradient-to-r from-orange-50 to-orange-200 mt-10 rounded-lg p-6 shadow-lg">
        <div className="text-left mb-6">
          <p className="font-bold text-5xl text-black ">{data.city}</p>
          <p className="text-slate-500 text-2xl mt-1">{day},{time}</p>
        </div>
        <div className="flex justify-center items-center gap-x-14">
          <div>
            <img className="w-40 mb-5" src={`icons/${data.weather[0].icon}.png`} alt="weather" />
          </div>
          <div className="text-left">
            <p className="font-bold text-7xl text-black ">
              {Math.round(data.main.temp)}<span className="text-4xl align-top">°C</span>
            </p>
            <p className="text-slate-700 text-2xl ">{data.weather[0].description}</p>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto p-4 rounded-lg mb-2 flex" style={{ backgroundColor: '#FFD700' }}>
          <p className="font-semibold text-left text-slate-700">Wind</p>
          <p className="ml-auto text-slate-600">{data.wind.speed} m/s</p>
        </div>
        <div className="w-full max-w-sm mx-auto p-4 rounded-lg mb-2 flex" style={{ backgroundColor: '#98FB98' }}>
          <p className="font-semibold text-left text-slate-700">Humidity</p>
          <p className="ml-auto text-slate-600">{data.main.humidity}%</p>
        </div>
        <div className="w-full max-w-sm mx-auto p-4 rounded-lg mb-2 flex" style={{ backgroundColor: '#ADD8E6' }}>
          <p className="font-semibold text-left text-slate-700">Pressure</p>
          <p className="ml-auto text-slate-600">{data.main.pressure} hpa</p>
        </div>
      </div>
    </>
  );
};

export default Weather;
