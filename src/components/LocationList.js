import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";

const strToCompoents = cities => (
  cities.map( city => <WeatherLocation city={city} />)
);

const LocationList = ({ cities}) => (
  <div>
    { strToCompoents(cities) }
  </div>
);

LocationList.proTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationList;