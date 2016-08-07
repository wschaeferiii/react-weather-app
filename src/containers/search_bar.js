import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // binding the SearchBar Component to its methods so 'this'
    // isn't lost when calling the render method
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
  
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input 
          placeholder='Get a 5 day forecast'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>
            Submit!
          </button>
        </span>
      </form>
    );
  }
}


// binding the action 'fetchWeather' to props, it gives us 
// access to the function this.props.fetchWeather
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

// This function 'connect' is giving us passing null as 
// first argument since this container doesn't care about state.
export default connect(null, mapDispatchToProps)(SearchBar);