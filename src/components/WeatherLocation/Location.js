import React from "react";
import PropTypes from 'prop-types'

// Destructuring:
// const Location = (props) => {
const Location = ({ city }) => {
  // Destructuring:
  // const { city } = props;

  return (
    <div>
      <h1>{city}</h1>
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired
};

export default Location;
