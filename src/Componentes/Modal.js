import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEllipsisH, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import './img.css';
import { 
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Form } from 'reactstrap';
  import './img.css'


class ImgModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      img2: '',
    }
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal, });
  }

  uploadImg2 = (img2) => {
    this.setState({ img2 });
    return this.toggle();
  };

  render() {
    const { modal, img2 } = this.state;
    const url = this.props.url.replace('https://', '');
    return (
      <Fragment>
        <div className="bkgr_img" onClick={() => this.uploadImg2(this.props.img)}>
          <img className="imgs" src={this.props.img} alt='img' />
          <div class="middle">
            <Button className='save-btn'>Guardar</Button>
            <footer>
              <a target='_blank' href={this.props.url}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>{url}</span>
              </a>
              <span>
              <Button>
                <FontAwesomeIcon icon={faUpload} /> 
              </Button>
              <Button>
                <FontAwesomeIcon icon={faEllipsisH} />
              </Button>
              </span>
            </footer>
          </div>
        </div>

        <Modal fade={false} isOpen={modal} toggle={this.toggle} className={this.props.className}>
         <Helmet> 
           <title>Pinterest (Pin)</title>
         </Helmet>
          <ModalHeader>
            <Button color="secondary" className="btn_back" onClick={this.toggle}>
              <FontAwesomeIcon className="iconArrow" icon="arrow-left" />
              Inicio
            </Button>
          </ModalHeader>

          <ModalBody>
            <section class="container">
              <div id="fl" className="left-half">
                <article>
                  <Button color="secondary" className="btn_puntos">
                    <FontAwesomeIcon className="ellip_color" icon="ellipsis-h" />
                  </Button>
                  <img className="imgmodal" style={{ width: '100%', height: '100%' }} src={img2} alt='img' />
                </article>
              </div>
              <div id="fl" className="right-half">
                <article>
                  <div id='parent5' class="parent">
                    <div className="left">
                      <Form inline>
                        <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
                          <option value="true">Imagen</option>
                        </Input>
                        {' '}
                        <Button color="danger">Guardar</Button>
                      </Form>
                    </div>
                    <div className="right">
                      <Button color="secondary" className="right btn_upload">
                        <FontAwesomeIcon icon="upload" />
                        Enviar
                      </Button>
                    </div>
                  </div>
                  <div id='parent2' class="parent">
                    <div className="left _l">
                      <p>Subido por usuario</p>
                    </div>
                  </div>    
                  <div id='parent2' class="parent">
                    <div className="left _l">
                      <p className="p_comment">Comentarios</p>
                    </div>
                    <div class="right comm">
                      <Button color="secondary" className="btn_arrow-comment">
                        <FontAwesomeIcon className="arrow_icon-comment" icon="angle-down" />
                      </Button>
                    </div>      
                  </div>   
                </article>
              </div>
            </section>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default ImgModal;