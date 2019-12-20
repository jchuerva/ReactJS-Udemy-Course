import React, {Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import './style.css';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  FOG
} from "../../constants/weathers";

const data = {
  temperature: 5,
  weatherState: RAIN,
  humidity: 10,
  wind: '10 m/s'
}
// functional component
// const WeatherLocation = () => (
//   <div className="weatherLocationCont">
//     <Location city="Huelva"/>
//     <WeatherData data={data}/>
//   </div>
// );

// class component
class WeatherLocation extends Component{
  render (){
    return (
        <div className="weatherLocationCont">
        <Location city="Huelva"/>
        <WeatherData data={data}/>
      </div>
    )
  }
};

export default WeatherLocation;
