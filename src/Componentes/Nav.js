import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Input, InputGroupAddon, Col } from 'reactstrap';
import Img from 'react-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import './navstyle.css';  

const styles = {
  position: 'sticky',
  top: '0',
  zIndex: '9',
  background: 'white',
  borderBottom: '1px solid #efefef'
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
        <Col xs="1">
          <NavbarBrand className="mainLogo" > 
            <Img className="mainLogo" src="https://i.imgur.com/4gSR6RZ.png"></Img> 
          </NavbarBrand>
        </Col>
        <InputGroup className="inputSearch">
          <InputGroupAddon addonType="prepend">
            <FontAwesomeIcon className="iconSearch" icon="search" />
          </InputGroupAddon>
          <Input placeholder="Buscar" onKeyPress={this.props.enter} />
        </InputGroup>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="Inicio">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Following">Siguiendo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Avatar">
                <span className="avatar">
                  <p>V</p>
                </span> 
                <span className="name">Valerin</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Comment">
                <FontAwesomeIcon className="iconSearch" icon="comment-dots" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Bell">
                <FontAwesomeIcon className="iconSearch" icon="bell" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Points">
                <FontAwesomeIcon className="iconSearch" icon="ellipsis-h" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
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