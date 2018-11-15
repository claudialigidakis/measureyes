import React from 'react';
import {
  Row, Col, Container
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Contact extends React.Component {
  render () {
    return (
      <Container id="Contact" fluid>
          <Row>
          <Col>One</Col>
          <Col>Two</Col>
          </Row>
      </Container>
    );
  }
}

export default Contact
