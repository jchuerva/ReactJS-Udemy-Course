import React from "react";
import WeatherIcons from "react-weathericons";

import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  FOG
} from "../constants/weathers";

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy",
  [FOG]: "day-fog"
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  if (icon) 
    return <WeatherIcons name={icon} size="2x" />;
  else 
    return <WeatherIcons name={"fog"} size="2x" />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}
    <span>{`${temperature} Cº`}</span>
  </div>
);

export default WeatherTemperature;
