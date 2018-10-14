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

class ImgModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      img2: '',
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  uploadImg2 = (img2) => {
    this.setState({ img2 });
    return this.toggle();
  };

  render() {
    const { modal, img2 } = this.state;
    return (
      <div>
        <div className="bkgr_img" onClick={() => this.uploadImg2(this.props.img)}>
          <img className="imgs" src={this.props.img} />
        </div>

        <Modal fade={false} isOpen={modal} toggle={this.toggle} className={this.props.className}>

          <ModalHeader>
            <Button color="secondary" className="btn_back" onClick={this.toggle}>
              <FontAwesomeIcon className="iconArrow" icon="arrow-left" />
              Inicio
            </Button>
          </ModalHeader>

          <ModalBody>
            <Container>
              <Row>
                <Col xs="2">
                  <Button color="secondary" className="btn_puntos">
                    <FontAwesomeIcon className="ellip_color" icon="ellipsis-h" />
                  </Button>
                </Col>
                <Col xs="4"></Col>
                <Col xs="2">
                  <Button color="secondary" className="right btn_upload">
                    <FontAwesomeIcon icon="upload" />
                    Enviar
                  </Button>
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
                  <img className="imgmodal" style={{ width: '100%', height: '100%' }} src={img2}/>
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

export default ImgModal;