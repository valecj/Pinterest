import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Input, InputGroupAddon, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PinterestIMG from '../logo.svg';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import './navstyle.scss';  

const styles = {
  position: 'sticky',
  top: '0',
  zIndex: '9',
  background: 'white',
  borderBottom: 'none',
  padding: '15px'
}
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar style={styles} light expand="md">
        <Nav navbar>
          <NavbarBrand className="mainLogo" > 
            <img src={PinterestIMG} alt='Pinterest Logo' />
          </NavbarBrand>

          <NavItem className="Inicio">
            <NavLink>Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="Following">Today</NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="Following">Following</NavLink>
          </NavItem>

          <NavItem className='main-search'>
            <InputGroup className="inputSearch">
              <InputGroupAddon addonType="prepend">
                <FontAwesomeIcon className="iconSearch" icon="search" />
              </InputGroupAddon>
              <Input placeholder="Buscar" onKeyPress={this.props.enter} />
            </InputGroup>
          </NavItem>
       
          <NavItem>
            <NavLink className="Bell">
              <FontAwesomeIcon className="iconSearch" icon="bell" />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="Comment">
              <FontAwesomeIcon className="iconSearch" icon="comment-dots" />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="Comment">
              <div className='user-avatar'>
                <img src='https://www.alfabetajuega.com/wp-content/uploads/2020/04/one-piece-luffy-wano.jpg' alt='avatar' />
              </div>
            </NavLink>
          </NavItem>

            <NavItem>
              <NavLink className="Points">
                <FontAwesomeIcon className="iconSearch" icon="angle-down" />
              </NavLink>
            </NavItem>
          </Nav>
        <NavbarToggler onClick={this.toggle} />
      </Navbar>
    );
  }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

export default Header;