import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import './style.css';


// arrow function
const WeatherLocation = () => (
  <div className="weatherLocationCont">
    <Location city="Huelva"/>
    <WeatherData />
  </div>
);

export default WeatherLocation;
