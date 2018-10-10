import React from 'react';
import ReactWeather from 'react-open-weather';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Weather extends React.Component {

  render() {
    const API_KEY = "dfc3cb6c11684fc6a0025640181010"
    return (
    <div id="weather">
      <ReactWeather forecast="today" unit="imperial" apikey={API_KEY} type="auto"/>
    </div>
  )}
}

export default Weather
