import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";

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

  return <div>{strToCompoents(cities)}</div>;
};

LocationList.proTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLoation: PropTypes.func,
};

export default LocationList;