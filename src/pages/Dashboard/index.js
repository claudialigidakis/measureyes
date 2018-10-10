import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENETS
import Location from './Location'

class Dashboard extends React.Component {
  render(){
  return (
    <div>
    <Location/>
    <Location/>
  </div>
  );
  }
}
export default Dashboard
