import ReactWeather from 'react-open-weather';
import React from 'react';
// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default class Weather extends React.Component {
  render() {
    const API_KEY = `${process.env.WEATHER_API_KEY}`
    return (
    <div>
      <ReactWeather forecast="today" apikey={API_KEY} type="auto"/>
    </div>
  )}
}
