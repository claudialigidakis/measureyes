import React from 'react';
import {ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider'

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Filter extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      yaw_horizontal: 2,
      dwell_horizontal: .5,
      break_horizontal: 3
    }
  }

  handleYawChangeHorizontal = value => {
    this.setState({yaw_horizontal: value})
  };

  handleDwellChangeHorizontal = value => {
    this.setState({dwell_horizontal: value})
  };

  handleBreakChangeHorizontal = value => {
    this.setState({break_horizontal: value})
  };

  render () {
    const formatSec = value => parseFloat(value).toFixed(2) + ' sec'
    const {yaw_horizontal, dwell_horizontal, break_horizontal} = this.state
    return (
      <ListGroupItem>
        <ListGroupItemText>
          <Slider min={0} max={90} step={1} value={yaw_horizontal} onChange={this.handleYawChangeHorizontal}/>
          Yaw Angle: <span className='value'>{yaw_horizontal}</span>
          <Slider min={0} max={5} step={.1} format={formatSec} value={dwell_horizontal} onChange={this.handleDwellChangeHorizontal}/>
          Dwell Time: <span className='value'>{formatSec(dwell_horizontal)}</span>
          <Slider min={0} max={5} step={.1} format={formatSec} value={break_horizontal} onChange={this.handleBreakChangeHorizontal}/>
          Break Time: <span className='value'>{formatSec(break_horizontal)}</span>
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}

export default Filter
