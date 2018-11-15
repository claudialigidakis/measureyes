import React from 'react';
import {
  Container,
  Row, Col, Media
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import tim from '../../images/tim.png'
import steve from '../../images/steve.png'
import melissa from '../../images/melisa.png'
import nguyen from '../../images/nguyen.png'
import claudia from '../../images/claudia.png'

class Team extends React.Component {
  render() {
    return (
    <Container id="team" fluid>
      <div><h1 id="teamHeader">MEET THE TEAM</h1></div>
      <br />
        <Row>
          <Col xs="6" sm={{ size: 4, offset: .5}}>
            <Media src={claudia}/>
          </Col>
          <Col xs="6" sm={{ size: 4, offset: .5}}>
            <Media src={nguyen}/>
          </Col>
          <Col xs="6" sm={{ size: 4, offset: .5}}>
            <Media src={melissa}/>
          </Col>
        </Row>
        <Row>
          <Col sm="4" md={{ size: 4, offset: 2}}>
            <Media src={steve}/>
          </Col>
          <Col xs="6">
            <Media src={tim}/>
          </Col>
        </Row>
    </Container>);
  }
}

export default Team
