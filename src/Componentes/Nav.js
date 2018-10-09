import React from 'react';
import { InputGroup, Input, Button, InputGroupAddon } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Img from 'react-image';
import './navstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


/* Container.propTypes = {
    fluid:  PropTypes.bool
    // applies .container-fluid class
  } */
const Example = (props) => {
    return (
    <div>
        <Container className="nav">
            <Row>
                <Col xs="1">
                <Button className="logo"><Img className="mainLogo" src="https://i.imgur.com/4gSR6RZ.png"></Img></Button>
                </Col>
                <Col xs="6">
                <InputGroup className="inputSearch">
                <InputGroupAddon addonType="prepend"><FontAwesomeIcon className="iconSearch" icon="search" /></InputGroupAddon>
                <Input placeholder="Buscar" />
                </InputGroup>
                </Col>
                <Col xs="5">
                <Button outline color="primary" className="Inicio">Inicio</Button>
              
                <Button outline color="secondary" className="Following">Siguiendo</Button>
              
                <Button outline color="success" className="Avatar"><span className="avatar">V</span> <span className="name">Valerin</span></Button>
               
                <Button outline color="info" className="Comment"><FontAwesomeIcon className="iconSearch" icon="comment-dots" /></Button>
             
                <Button outline color="warning" className="Bell"><FontAwesomeIcon className="iconSearch" icon="bell" /></Button>
               
                <Button outline color="danger" className="Points"><FontAwesomeIcon className="iconSearch" icon="ellipsis-h" /></Button>
                </Col>
                <Col xs="12">
                <div className="divider"></div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Example;
