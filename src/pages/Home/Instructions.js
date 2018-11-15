import React from 'react';
import {
  Row, Col, Container
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import stepOne from '../../images/cameraIcon.png'
import stepTwo from '../../images/dataIcon.png'
import stepThree from '../../images/alertIcon.png'


class Instructions extends React.Component {
  render () {
    return (
      <Container id="how" fluid>
        <Row>
        <Col>
        <img className="stepImages" src={stepOne}/>
          <h4>Step 1</h4>
          <p class="stepDescriptions">Cameras are installed and connected to MeasurEyes analytics in optimized store-front areas.</p>
        </Col>
        <Col>
        <img className="stepImages" src={stepTwo}/>
          <h4>Step 2</h4>
          <p class="stepDescriptions">Data is collected from pedestrians to determine <br/> the head-turn rate and is displayed on a web dashboard.</p>
        </Col>
        <Col>
        <img className="stepImages" src={stepThree}/>
          <h4>Step 3</h4>
          <p class="stepDescriptions">The web dashboard will alert the owner when statistical significance is achieved and provides results.</p>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Instructions
