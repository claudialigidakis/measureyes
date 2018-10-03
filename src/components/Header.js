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

//REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {accountLogout} from '../state/actions/auth';

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
                <UncontrolledDropdown nav="nav" inNavbar="inNavbar">
                  <DropdownToggle nav="nav" caret="caret">
                    Account
                  </DropdownToggle>
                  <DropdownMenu right="right">
                    <DropdownItem>
                      Settings
                    </DropdownItem>
                    <DropdownItem>
                      Locations
                    </DropdownItem>
                    <DropdownItem divider="divider"/>
                    <DropdownItem>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav> )
              : ( <Nav className="ml-auto" navbar="navbar">
                  <NavItem>
                    <NavLink href="/Login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Signup">Sign Up</NavLink>
                  </NavItem>
                </Nav> )
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
