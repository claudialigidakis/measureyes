import React from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {accountLogin} from '../../state/actions/auth';

// COMPONENTS
import animatedGraph from '../../images/animatedGraph.png'
import About from './About'
import Instructions from './Instructions'
import SignUp from './Signup'
import Team from './Team'
import Contact from './Contact'
class Home extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron>
      </Jumbotron>
      <div id="descriptionDiv">
      <p id="description">
      Bringing the methods, metrics, and power of A/B testing from the digital world <br /> of e-commerce into the physical world of brick & mortar retail displays.
      </p>
      </div>
      <About/>
      <Instructions/>
      <Contact/>
      <div><img id="animatedGraph" src={animatedGraph}/></div>
      <Team />
    </div>);
  }
}

export default Home;
