// REACT
import React from 'react';
//CSS
import './App.css';

// ROUTER
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAccount } from './state/actions/auth';

// COMPONENTS
import Header from './components/Header';

// CONTAINERS
// import Dashboard from './containers/Dashboard';
// import Home from './containers/Home';
import Login from './containers/Login';
// import Settings from './containers/Settings';
// import Signup from './containers/Signup';

// ==========

class App extends React.Component {
  componentDidMount () {
    this.props.getAccount();
  };

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={() => <Redirect to="/home" />} />
              {/* <Route path="/home" component={Home} /> */}
              <Route path="/login" component={Login} />
              {/* <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/settings" component={Settings} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  account: state.auth.account,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAccount
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
