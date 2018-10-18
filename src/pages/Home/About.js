import React from 'react';
import {
  Container
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class About extends React.Component {
  render () {
    return (
      <Container id="about">
        <div className="text-center py-3">
        Measureyes brings the methods, metrics and power of A/B testing from the digital world of e-commerce into the physical world of brick & mortar retail displays.
      </div>
      </Container>
    );
  }
}

export default About
