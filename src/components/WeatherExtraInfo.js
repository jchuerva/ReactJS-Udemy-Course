import React from "react";

export const WeatherExtraInfo = ({ humidity, wind }) => (
  <div>
    <span>{`${humidity} % - `}</span>
    <span>{`${wind} viento`}</span>
  </div>
);
