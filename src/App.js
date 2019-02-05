import React from "react";
import Form from "./components/form.jsx";
import Weather from "./components/weather.jsx";
import "./App.css";

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

  getCity = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        error: undefined
      });
    }
  };

  render() {
    return (
      <div className="main">
        <Form weatherMethod={this.getCity} />
        <Weather data={this.state} />
      </div>
    );
  }
}

export default App;
