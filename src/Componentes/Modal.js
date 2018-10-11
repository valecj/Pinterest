import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Img from 'react-image';
import { Media } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input, Form } from 'reactstrap';
import './img.css'

class ImgModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    console.log(this.props.images)
    return (
      <div>
        <Media className="img" left onClick={this.props.toggle}>
        <img className="imgs" src={this.props.img}></img>
        </Media>
        
        <Modal fade={false} isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        
          <ModalHeader>
          <Button color="secondary" className="btn_back" onClick={this.props.toggle}><FontAwesomeIcon className="iconArrow" icon="arrow-left" />  Inicio</Button>
          </ModalHeader>
          <ModalBody>
            <Container>
            <Row>
            <Col xs="2">
            <Button color="secondary" className="btn_puntos"><FontAwesomeIcon className="ellip_color" icon="ellipsis-h" /></Button>
            </Col>
            <Col xs="4"></Col>
            <Col xs="2">
            <Button color="secondary" className="right btn_upload"><FontAwesomeIcon icon="upload" /> Enviar</Button>
            </Col>
            <Col xs="4">
            <Form inline>
            <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
              <option value="true">Imagen</option>
            </Input>
            {' '}
            <Button color="danger">Guardar</Button>
            </Form>
            </Col>
            <Col xs="6">
            <Img className="imgmodal" src={this.props.img}></Img>
            </Col>
            <Col xs="6">
            <p>hola</p>
            </Col>
            </Row>
            </Container>
          </ModalBody>  
        </Modal>
      </div>
    );
  }
}

export default ImgModal; 