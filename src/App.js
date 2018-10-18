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
import Footer from './shared/Footer'
// CONTAINERS
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

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
            {!this.props.authorized ? null : <Header />}
            <Switch>
              <Route exact path="/" component={() => <Redirect to="/home" />} />
              <Route path="/home" component={Home} />
              {/* <Route path="/signup" component={Signup} /> */}
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
            <Footer />
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
