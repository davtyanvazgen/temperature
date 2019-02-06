import React from "react";

function Weather(props) {
  return (
    <div className="weatherContainer">
      {props.data.city && (
        <div>
          <p className="p">
            City: {props.data.city} ({props.data.country})
          </p>
          <p className="p">
            Temperature:{" "}
            {Math.floor(props.data.temp) >= 0
              ? `+${Math.floor(props.data.temp)} ºC`
              : `${Math.floor(props.data.temp)} ºC`}
          </p>
          <p className="p">Pressure: {props.data.pressure}</p>
        </div>
      )}
      {props.data.lost && (
        <p className="p_warning">
          {props.data.lost.message.charAt(0).toUpperCase() +
            props.data.lost.message.slice(1)}
        </p>
      )}
    </div>
  );
}

export default Weather;
