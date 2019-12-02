import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

// arrow function
const WeatherLocation = () => (
  <div>
    <Location city="Huelva"/>
    <WeatherData />
  </div>
);

export default WeatherLocation;
