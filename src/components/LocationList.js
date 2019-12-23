import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";

const LocationList = ({ cities}) => {
  console.log(cities)
  return ( 
  <div>
    <WeatherLocation city= "Huelva,es" />
    <WeatherLocation city= "London,uk" />
    <WeatherLocation city= "Tokyo,jp" />
  </div>)
};

LocationList.proTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationList;