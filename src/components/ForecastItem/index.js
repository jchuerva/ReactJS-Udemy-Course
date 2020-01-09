import React, { Component } from "react";
import PropTypes from "prop-types";
import WeatherData from "./../WeatherLocation/WeatherData";

const ForecastItem = ({weekDay, hour, data}) => {
  return (
    <div>
      <div>{weekDay} Hora: {hour} hs</div>
      <WeatherData key={weekDay} data={data}/>
    </div>
  )
}

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default ForecastItem