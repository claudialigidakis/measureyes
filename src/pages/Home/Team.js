import React from 'react';
import {
  Container,
  Row, Col, Media
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Team extends React.Component {
  render() {
    return (<Container id="team">
      <h1>Meet the Team</h1>
        <Row>
          <Col xs={6} md={4}>
            <Media src="https://www.rd.com/wp-content/uploads/2018/02/19_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_391191067_chris_tina-760x506.jpg"/>
          </Col>
          <Col xs={6} md={4}>
            <Media src="https://www.rd.com/wp-content/uploads/2018/02/19_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_391191067_chris_tina-760x506.jpg"/>
          </Col>
          <Col xs={6} md={4}>
            <Media src="https://www.rd.com/wp-content/uploads/2018/02/19_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_391191067_chris_tina-760x506.jpg"/>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Media src="https://www.rd.com/wp-content/uploads/2018/02/19_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_391191067_chris_tina-760x506.jpg"/>
          </Col>
          <Col xs={6} md={4}>
            <Media src="https://www.rd.com/wp-content/uploads/2018/02/19_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_391191067_chris_tina-760x506.jpg"/>
          </Col>
        </Row>
    </Container>);
  }
}

export default Team
