import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENETS
import Events from './Events'
import Graphs from './Graphs'
import Video from './Video'
import Weather from './Weather'

export default class Location extends React.Component {
  render(){
  return (
    <div>
      <Video />
      <Weather />
      <Events />
      <Graphs />
    </div>
  );
  }
}
