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
};

const data2 = {
  temperature: 10,
  weatherState: WINDY,
  humidity: 10,
  wind: "10 m/s"
};
// functional component
// const WeatherLocation = () => (
//   <div className="weatherLocationCont">
//     <Location city="Huelva"/>
//     <WeatherData data={data}/>
//   </div>
// );

// class component
class WeatherLocation extends Component{

  constructor() {
    super();
    this.state = {
      city: 'Huelva',
      data: data,
    }
  }

  handleUpdateClick = () => {
    console.log("actualizado");

    this.setState({
      data: data2
    });
  }

  render (){
    const {city, data} = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city= {city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
};

export default WeatherLocation;
