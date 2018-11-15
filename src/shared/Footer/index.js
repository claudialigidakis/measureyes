import React from 'react';
import { Col, Container, Row } from 'reactstrap';

// ROUTER
import {Link} from 'react-router-dom'

//REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Footer extends React.Component {
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    <footer className="font-small pt-2 mt-2">
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: MeasurEyes
        </Container>
      </div>
    </footer>);
  }
}

export default Footer;
