import React from "react";
import PropTypes from "prop-types";
import "./styles.css";


export const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weatherExtraInfoCont">
    <span>{`${humidity} % - `}</span>
    <span>{`${wind} viento`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}