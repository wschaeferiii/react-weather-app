import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

  renderWeather(cityData) {
    const cityName = cityData.city.name;

    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return ( 
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /> </td>
        <td><Chart data={temps} color='orange' units='k' /></td>
        <td><Chart data={humidities} color='green' units='kPa' /></td>
        <td><Chart data={pressures} color='blue' units='%' /></td>
      </tr>
    );
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// instead of state, we can just put weather as the parameter.  
// Same as doing const weather = state.weather
function mapStateToProps({weather}) {
  // the { weather } below is just ES6 for { weather: weather }
  return { weather } 
}

export default connect(mapStateToProps)(WeatherList)