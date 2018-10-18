import React from 'react';
import {
  Container
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Instructions extends React.Component {
  render () {
    return (
      <Container id="how">
          <h1>How it works</h1>
        1. have camera unit installed in storefront or near advertisement
        <br />
        2. data is collected from pedestrians to determine the head-turn rate and is displayed on a web dashboard
        <br />
        3. the web dashboard will alert the owner when statistical significance is achieved and provides results
      </Container>
    );
  }
}

export default Instructions
