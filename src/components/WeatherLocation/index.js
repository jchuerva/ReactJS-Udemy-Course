import React, {Component} from "react";
import CircularProgress from "@material-ui/core/CircularProgress"
import {PropTypes} from "prop-types"
import getUrlWeatherByCity from "../../services/getWeatherByCity"
import transformWeather from './../../services/transformWeather'
import Location from "./Location";
import WeatherData from "./WeatherData";
import './style.css';



// functional component
// const WeatherLocation = () => (
//   <div className="weatherLocationCont">
//     <Location city="Huelva"/>
//     <WeatherData data={data}/>
//   </div>
// );

// class component
class WeatherLocation extends Component{

  constructor(props) {
    super(props);
    const {city} = props;
    this.state = {
      city,
      data: null,
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

    const api_weather = getUrlWeatherByCity(this.state.city);
    
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
        {data ? <WeatherData data={data} /> : <CircularProgress size={50}/> }
      </div>
    );
  }
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
}

export default WeatherLocation;
