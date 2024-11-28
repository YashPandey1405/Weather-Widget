import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InformationBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });
  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div>
      <h1>
        Weather Widget By <i>Yash Pandey</i>
      </h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
