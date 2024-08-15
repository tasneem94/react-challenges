import { useEffect, useState } from "react";

const fetchData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchWeatherData = async (search) => {
    if (!search) return;
    setIsLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d115de45b98469d7eab46abadc74a0ad`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setIsLoading(false);
        setErrorMessage(null);
        setData(data);
      } else {
        setIsLoading(false);
        setErrorMessage("City not found.");
        setData(null);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setErrorMessage(error);
    }
  };

  return { data, errorMessage, isLoading, fetchWeatherData };
};

export default fetchData;
