import React from "react";
import { WeatherExtraInfo } from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  FOG
} from "../../../constants/weathers";
import './styles.css';

const WeatherData = () => (
  <div className="weatherDataCont" >
    <WeatherTemperature temperature={20} weatherState={RAIN} />
    <WeatherExtraInfo humidity={88} wind={"10 m/s"} />
  </div>
);

export default WeatherData;
