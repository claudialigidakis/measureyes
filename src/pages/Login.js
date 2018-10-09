import React from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {accountLogin} from '../state/actions/auth';

class Login extends React.Component {
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
    return (<Container>
      <Form inline="inline" onSubmit={this.handleLogin}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="eemail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="email" onChange={event => this.setState({email: event.target.value})} value={this.state.email} placeholder="something@idk.cool" required="required"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="password" className="mr-sm-2">Password</Label>
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
    </Container>);
  }
}

const mapStateToProps = state => ({
  showLoginError: state.auth.showLoginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  accountLogin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
