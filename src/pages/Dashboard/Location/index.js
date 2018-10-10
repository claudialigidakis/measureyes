import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENTS
import Events from './Events'
import Graphs from './Graphs'
import Video from './Video'
import Weather from './Weather'

class Location extends React.Component {
  render () {
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

export default Location
