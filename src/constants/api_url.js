const location = "Huelva,es";

const api_key = "ae752760eeef771d434926078c5f53c3";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
