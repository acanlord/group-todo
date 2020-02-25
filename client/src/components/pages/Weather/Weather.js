import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
  state = {
    searchBox: 'San Francisco, California',
    description: '',
    isLoading: false,
  }

  doFetch = () => {
    console.log('Hitting refresh', this.state.searchBox);
    const query = this.state.searchBox.replace(/ /g, '+');
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
      query + '&appid=0de82b6b4ba5d843dac44bbee4d02543';
    this.setState({
      isLoading: true,
    });
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('receiving data', data);

        // 404
        if (!data.main) {
          this.setState({
            location: "Not found.",
            description: "",
            isLoading: false,
          });
          return;
        }

        // Do state set for real data
        this.setState({
          location: data.name,
          temperature: Math.round((1.8 * (data.main.temp - 273)) + 32),
          description: data.weather[0].main,
          windSpeed: Math.round(data.wind.speed),
          humidity: Math.round(data.main.humidity),
          pressure: Math.round(data.main.pressure),
          isLoading: false,
        });
      });
  }

  componentDidMount = (ev) => {
    this.doFetch();
  }

  onSearchBoxChange = (ev) => {
    this.setState({searchBox: ev.target.value});
  }

  render() {
    console.log('rendering!');

    return (
      <div className='App App--clear'>
        <div className="WeatherDashboard">
          {this.state.isLoading ? <div className="loading"></div> : null}
          <div className="WeatherDashboard-location">
            {this.state.location}
          </div>

          <div className="WeatherDashboard-overview">
            <span className="WeatherDashboard-temperature">
              {this.state.temperature}° <span>F</span>
            </span>
            <div className="WeatherDashboard-description">{this.state.description}</div>
          </div>
          <div className="WeatherDashboard-details">
            <div className="WeatherDashboard-label">Wind</div>
            <div className="WeatherDashboard-data">{this.state.windSpeed} <span>km/h</span></div>
            <div className="WeatherDashboard-label">Humidity</div>
            <div className="WeatherDashboard-data">{this.state.humidity} <span>%</span></div>
            <div className="WeatherDashboard-label">Pressure</div>
            <div className="WeatherDashboard-data">{this.state.pressure}</div>
          </div>
          <div className="Controls">
            <input placeholder="Enter location name"
              value={this.state.searchBox}
              onChange={this.onSearchBoxChange} />
            <button onClick={this.doFetch}>Refresh</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
