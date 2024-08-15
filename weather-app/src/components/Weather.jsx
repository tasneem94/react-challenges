import fetchData from "../hooks/fetchData";
import Search from "./Search";

const Weather = () => {
  const { data, isLoading, errorMessage, fetchWeatherData } = fetchData();
  console.log(data);

  const getFormattedDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // Use 'short' for abbreviated month names
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  };

  return (
    <div className="container">
      <Search fetchWeatherData={fetchWeatherData} />
      {isLoading && <p className="loading-text">Loading. Please wait....</p>}
      {errorMessage && <p className="error-text">Error: {errorMessage}</p>}
      {data && (
        <div className="weather-data-container">
          <div className="location-name">
            {data.name}, {data.sys.country}
          </div>
          <div className="txt margin">{getFormattedDate()}</div>
          <div className="temp-val margin">{data.main.temp}°C</div>
          <div className="temp-real-feel margin">
            Feels Like: {data.main.feels_like}°C
          </div>
          <div className="weather-description margin">
            {data.weather[0].description}
          </div>
          <div className="txt margin">Humidity: {data.main.humidity}%</div>
          <div className="txt">Wind Speed: {data.wind.speed} m/s</div>
        </div>
      )}
    </div>
  );
};

export default Weather;
