import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import placeHolder from '../../images/placeHolder.png'
import threeImage from '../../images/threeImage.png'

class About extends React.Component {
  render () {
    return (
      <div>
      <Container fluid>
      <img className="center" id="threeImage" src={threeImage}/>
      </Container>
      <Container id="about">
          <Row>
          <Col id="aboutImage"><img className="placeHolder" src={placeHolder}/></Col>
          <Col>
          <h6 id="aboutDescriptionTitle">What is Measureyes and how can it help your business?</h6>

          <div id="aboutDescription">
                Measureyes is an A / B testing platform which allows retailers to track the success of their storefront window displays by utilizing collected data based on head - turn rates(HTR) and facial recognition.In an online environment, the placement of artifacts, colors, typography, etc.can all affect the rate of conversions.We hypothesize that the same is true
                for brick and mortar display windows and wanted to create a way
                for retailers to improve their conversion rates in a way that mimics the online environment.
                <br />
                <br />
                Velit euismod in pellentesque massa placerat duis ultricies lacus sed.Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.Ut sem viverra aliquet eget sit amet tellus.Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.Mauris pharetra et ultrices neque ornare.Non sodales neque sodales ut etiam sit amet.
          </div>
                </Col>
          </Row>
      </Container>
      </div>
    );
  }
}

export default About
