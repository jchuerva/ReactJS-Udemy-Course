import React from "react";
import PropTypes from "prop-types";


export const WeatherExtraInfo = ({ humidity, wind }) => (
  <div>
    <span>{`${humidity} % - `}</span>
    <span>{`${wind} viento`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}