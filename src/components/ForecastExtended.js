import React, {Component} from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem"
import transformForecast from "../services/transformForecast";
import './style.css';

/*
const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
]

const data = {
  temperature: 10,
  humidity: 10,
  weatherState: "normal",
  wind: "normal"
};
*/

const api_key = "ae752760eeef771d434926078c5f53c3";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

  constructor(){
    super()
    this.state ={
      forecastData: null
    }
  }

  componentDidMount() {
    // fetch or axios
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`

    fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        console.log(weather_data)
        const forecastData = transformForecast(weather_data)
        // this.setState({ forecastData: forecastData });
        this.setState({ forecastData });
      }
    );
  }

  renderForecastItemDays = () => {
    // return days.map(day => <ForecastItem weekDay={day} hour={10} data={data}/>);
    return "Render Items";
  }

  renderProgress = () => {
    return <h3>"Cargando Pronostico extendido..."</h3>
  }

  render(){
    // const city = this.props.city;
    const {city} = this.props;
    const {forecastData} = this.state

    return (
      <div>
        <h2 className="forecast-title">Pronóstico Extendido para {city} </h2>
        { forecastData ? 
          this.renderForecastItemDays():
          this.renderProgress()
        }
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended