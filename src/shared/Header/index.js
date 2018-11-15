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
import {
  Link
} from 'react-router-dom'

//REDUX
import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';
import {
  accountLogout
} from '../../state/actions/auth';

import logo from '../../images/logo.png'

class Header extends React.Component {
    render() {
      return (

        <Navbar sticky={'top'}>
        <NavbarBrand href="/home" >
        <img src={logo} className="brand-logo" />
        </NavbarBrand>
        <Nav className="navbar-nav ml-auto" navbar>
          <NavItem >
            <NavLink id="aboutLink" href = "/About" > About </NavLink>
          </NavItem>
          <NavItem >
            <NavLink id="productLink" href = "/Product" > Product </NavLink>
          </NavItem>
          <NavItem >
            <NavLink id="teamLink" href = "/MeetTheTeam" > Meet The Team </NavLink>
          </NavItem>
          <NavItem>
            <div id="contactLinkBox">
            <NavLink id="contactLink" href = "/Contact" > Contact Us </NavLink>
            </div>
          </NavItem>
        </Nav>
        </Navbar>);
      }
    }


    export default Header;
