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
import Sidebar from './Sidebar'
import Location from './Location'

class Dashboard extends React.Component {
  render () {
    return (
      <Container className="dashboard-container" fluid="true">
        <Row>
          <Col sm="3">
            <Sidebar />
          </Col>
          <Col sm="9">
            <Container>
              <Row>
                <Col sm="6">
                  <Location />
                </Col>
                <Col sm="6">
                  <Location />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard
