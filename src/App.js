// REACT
import React from 'react';
//CSS
import './App.css';
import 'react-open-weather/lib/css/ReactWeather.css';
import 'react-rangeslider/lib/index.css'

// ROUTER
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAccount, getAccountData } from './state/actions/auth';

// COMPONENTS
import Header from './shared/Header';

// CONTAINERS
import Dashboard from './pages/Dashboard';
// import Home from './containers/Home';
import Login from './pages/Login';

// ==========

class App extends React.Component {
  componentDidMount () {
    this.props.getAccount();
    this.props.getAccountData();
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
              {/* <Route path="/signup" component={Signup} /> */}
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  account: state.auth.account,
  account_data: state.auth.accountData,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAccount, getAccountData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
