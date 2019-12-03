import React from "react";
import { WeatherExtraInfo } from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

const WeatherData = ({
  data: { temperature, weatherState, humidity, wind }
}) => {
  return (
    <div className="weatherDataCont">
      <WeatherTemperature
        temperature={temperature}
        weatherState={weatherState}
      />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
  );
};

export default WeatherData;
