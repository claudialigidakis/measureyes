import React from 'react';
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENTS
import Filter from './Filter'
import Location from './Location'

class Sidebar extends React.Component {
  render () {
    return (
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>Live Feed</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Past Data</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Future Predictions</ListGroupItem>
        <Filter />
        <Location />
      </ListGroup>
    );
  }
}

export default Sidebar
