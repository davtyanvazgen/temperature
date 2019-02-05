import React from "react";
import Info from "./components/info.jsx";
import Form from "./components/form.jsx";
import Weather from "./components/weather.jsx";

const apiKEY = "e761b2bcc5025d319d9ee25a46e023cf";
class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);

      let sunset = data.sys.sunset;
      let dataSunset = new Date();
      dataSunset.setTime(sunset);
      let sunset_date = dataSunset.getHours() + ":" + dataSunset.getMinutes();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "vvedite nazvanie goroda"
      });
    }
  };

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather data={this.state} />
      </div>
    );
  }
}

export default App;
