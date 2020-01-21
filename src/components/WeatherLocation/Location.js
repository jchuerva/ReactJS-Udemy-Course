import React from "react";
import PropTypes from "prop-types";
import "./style.css";

// Destructuring:
// const Location = (props) => {
const Location = ({ city }) => {
  // Destructuring:
  // const { city } = props;

  return (
    <div className="LocationCont">
      <h1>{city}</h1>
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired
};

export default Location;
