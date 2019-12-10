import React from "react";
import { WeatherExtraInfo } from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";
import PropTypes from 'prop-types';

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

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;
