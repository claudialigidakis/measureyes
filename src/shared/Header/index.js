import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

// ROUTER
import { Link } from 'react-router-dom'

//REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {accountLogout} from '../../state/actions/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (<div>
      <Navbar color="dark" dark="dark" expand="md">
        <NavbarBrand href="/">MeasurEyes</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar="navbar">
          {
            this.props.authorized
              ? (<Nav className="ml-auto" navbar="navbar">
                <NavItem>
                  <NavLink href="/Dashboard">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Account">Account</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/" onClick={() => {
                      this.props.accountLogout()
                    }}>
                    Log Out
                  </NavLink>
                </NavItem>
              </Nav>)
              : (<Nav className="ml-auto" navbar="navbar">
                <NavItem>
                  <NavLink href="/Login">Login</NavLink>
                </NavItem>
              </Nav>)
          }
        </Collapse>
      </Navbar>
    </div>);
  }
}

const mapStateToProps = state => ({account: state.auth.account, authorized: state.auth.authorized});

const mapDispatchToProps = dispatch => bindActionCreators({
  accountLogout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
