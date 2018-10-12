import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './btns.css';

class Buttons extends Component {
  render() {
    return (
        <Container fluid>
            <Row>
                <Col xs="12">
                <Button className="bnt_1" color="primary">Computación</Button>{' '}
                <Button className="btn_2" color="secondary">Tecnología</Button>{' '}
                <Button className="btn_3" color="success">Chocolate</Button>{' '}
                <Button className="btn_4" color="info">Comida</Button>{' '}
                <Button className="bnt_1" color="warning">Salud</Button>{' '}
                <Button className="btn_5" color="danger">Café</Button>{' '}
                <Button className="btn_3" color="success">Pajaros</Button>{' '}
                <Button className="btn_2" color="info">Animales</Button>{' '}
                <Button className="btn_5" color="warning">Gatos</Button>{' '}
                <Button className="btn_2" color="danger">Perros</Button>{' '}
                <Button className="btn_3" color="primary">Conejos</Button>{' '}
                <Button className="btn_5" color="secondary">Hacker</Button>{' '}
                <Button className="btn_4" color="danger">Perros</Button>{' '}
                <Button className="bnt_1" color="primary">Conejos</Button>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default Buttons;