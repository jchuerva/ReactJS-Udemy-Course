import React, {Component} from "react";
import transformWeather from './../../services/transformWeather'
import {api_weather} from '../../constants/api_url'
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
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  
  handleUpdateClick = () => {
    fetch(api_weather).then( resolve => {
      return resolve.json();
    }).then(data => {
      console.log("handleUpdateClick");
      const newWeather = transformWeather(data);
      console.log(newWeather);
      this.setState({
        data: newWeather
      });
    })
  }

  render (){
    console.log("render");
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
