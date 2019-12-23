import convert from "convert-units";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZE
} from "../constants/weathers";

const getTemp = kelvin => {
  return Number(
    convert(kelvin)
      .from("K")
      .to("C")
      .toFixed(1)
  );
};

const getWeatherState = weather => {
  const { id } = weather;
  if (id < 300) {
    return THUNDER
  } else if (id < 400) {
    return DRIZZE;
  } else if (id < 500) {
    return RAIN;
  } else if (id < 600) {
    return SNOW;
  } else if (id < 700) {
    return SUN;
  } else {
    return CLOUD;
  }
};


const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data.weather[0]);
  const temperature = getTemp(temp);
  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`
  };
  return data;
};

export default transformWeather
