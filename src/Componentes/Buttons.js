import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './btns.css';

class Buttons extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="12">
            <Button className="btn_1">Computación</Button>{' '}
            <Button className="btn_2">Tecnología</Button>{' '}
            <Button className="btn_3">Chocolate</Button>{' '}
            <Button className="btn_4">Comida</Button>{' '}
            <Button className="btn_1">Salud</Button>{' '}
            <Button className="btn_5">Café</Button>{' '}
            <Button className="btn_3">Pajaros</Button>{' '}
            <Button className="btn_2">Animales</Button>{' '}
            <Button className="btn_5">Gatos</Button>{' '}
            <Button className="btn_1">Perros</Button>{' '}
            <Button className="btn_3">Conejos</Button>{' '}
            <Button className="btn_5">Hacker</Button>{' '}
            <Button className="btn_4">Perros</Button>{' '}
            <Button className="btn_1">Conejos</Button>{' '}
            <Button className="btn_2">Osos</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Buttons;