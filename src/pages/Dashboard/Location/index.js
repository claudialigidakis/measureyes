import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

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
        <br />
        <Container className="locations-weather-events">
          <Row>
            <Col sm="6">
              <Weather />
            </Col>
            <Col sm="6">
              <Events />
            </Col>
          </Row>
        </Container>
        <br />
        <Graphs />
      </div>
    );
  }
}

export default Location
