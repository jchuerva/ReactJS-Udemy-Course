import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";
import "./style.css";

const LocationList = ({ cities, onSelectedLoation }) => {
  const handleWeatherLocation = city => {
    console.log("handleUpdateClick");
    onSelectedLoation(city);
  };

  const strToCompoents = cities =>
    cities.map(city => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => handleWeatherLocation(city)}
      />
    ));

  return <div className="locationList">{strToCompoents(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLoation: PropTypes.func
};

export default LocationList;