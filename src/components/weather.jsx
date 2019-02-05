import React from "react";

function Weather(props) {
  return (
    <div>
      {props.data.city && (
        <React.Fragment>
          <p>
            City: {props.data.city} ({props.data.country})
          </p>
          <p>temperature: {props.data.temp}</p>
          <p>pressure: {props.data.pressure}</p>
        </React.Fragment>
      )}
      <p>{props.data.error}</p>
    </div>
  );
}

export default Weather;
