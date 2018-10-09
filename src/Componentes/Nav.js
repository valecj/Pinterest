import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Input, Button, InputGroupAddon } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Img from 'react-image';
import './navstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  DropdownItem } from 'reactstrap';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      searchInput: '',
      apikey: '10347633-396ecc5e8f118c4d41d96ecbc',
      images: [],
      imgsPerPage: 20
    };

    this.onChangeInputSearch = this.onChangeInputSearch.bind(this);
  }

  componentDidMount() {
    fetch(`https://pixabay.com/api/?key=${this.state.apikey}&q=${this.state.searchInput}&per_page=${this.state.imgsPerPage}`)
      .then(response => response.json())
      .then(data => {
        let imgs = data.hits.map(res => res)
        console.log(imgs)
        this.setState({
          images: imgs
        });
      });
    }

  onChangeInputSearch(event) {
    if (event.key === 'Enter') {
      this.setState({
        searchInput: event.target.value
      });
      console.log(event.target.value); 
    }; 
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <Col xs="1">
            <NavbarBrand className="mainLogo"> <Img className="mainLogo" src="https://i.imgur.com/4gSR6RZ.png"></Img> </NavbarBrand>
            </Col>
            <InputGroup className="inputSearch">
            <InputGroupAddon addonType="prepend"><FontAwesomeIcon className="iconSearch" icon="search" /></InputGroupAddon>
            <Input placeholder="Buscar" onKeyPress={key => this.onChangeInputSearch(key)} />
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
            <NavLink className="Avatar" href="/components/"><span className="avatar"><p>V</p></span> <span className="name">Valerin</span></NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="Comment"><FontAwesomeIcon className="iconSearch" icon="comment-dots" /></NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="Bell"><FontAwesomeIcon className="iconSearch" icon="bell" /></NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="Points"><FontAwesomeIcon className="iconSearch" icon="ellipsis-h" /></NavLink>
            </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
      </div>
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