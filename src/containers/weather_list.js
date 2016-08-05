import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {

  renderWeather(cityData) {
    const cityName = cityData.city.name;

    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    return ( 
      <tr key={cityName}>
        <td>{cityName}</td>
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
  // { weather } is just ES6 for { weather: weather }
  return { weather } 
}

export default connect(mapStateToProps)(WeatherList)