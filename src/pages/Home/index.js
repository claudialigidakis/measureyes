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
import About from './About'
import Instructions from './Instructions'
import SignUp from './Signup'
import Team from './Team'
import Contact from './Contact'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.accountLogin(this.state, this.props.history);
  };
  render() {
    return (<div>
      <Jumbotron>
        {this.props.authorized ? null :
        (<Container id="signInForm" center>
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" onChange={event => this.setState({email: event.target.value})} value={this.state.email} placeholder="something@idk.cool" required="required"/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input placeholder="don't tell!" type="password" name="password" id="password" value={this.state.password} onChange={event => this.setState({password: event.target.value})} required="required"/>
            </FormGroup>
            <Button>Submit</Button>
            {
              this.props.showLoginError
                ? (<p id="error" className="help is-danger">
                  Email or password is incorrect.
                </p>)
                : null
            }
          </Form>
        </Container>) }
      </Jumbotron>
      <About/>
      <Instructions/>
      <Team />
      <Contact />
    </div>);
  }
}

const mapStateToProps = state => ({
  authorized: state.auth.authorized,
  showLoginError: state.auth.showLoginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  accountLogin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
