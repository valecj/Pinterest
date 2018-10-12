import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './img.css';
import { 
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col,
  Input,
  Form } from 'reactstrap';

class Full extends React.Component {
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

  render(){
    console.log(this.state.img2)
    return (
        <div>
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
            <Col xs="6" className="mrgn_top">
            <img className="imgmodal" src={this.props.img2}/>
            </Col>
            <Col xs="6" className="mrgn_top">
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

export default Full; 