import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEllipsisH, faExternalLinkAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import './img.scss';
import { 
  Button,
  Modal,
  ModalHeader,
  ModalBody } from 'reactstrap';
  import './img.scss'
import ImageList from './ImageList/ImageList';

  const styles = {
    position: 'sticky',
    top: '85px',
    background: 'white',
    borderBottom: 'none'
  }
class ImgModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      loaded: false,
    }
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal, });
  }

  render() {
    const { modal, loaded } = this.state;
    const { alt_description, likes, color, height } = this.props.image;

    const url = this.props.image.links.self.replace('https://', '');
    const urlModal = url.split('.com/');

    return (
      <Fragment>
        <div className="bkgr_img" onClick={this.toggle}>
          <div 
            id='img-container' 
            className="imgs" 
            style={{ 
              background: color,
              minHeight: height/25 + 'px'
            }}
          >
            <img 
              src={this.props.image.urls.regular} 
              style={loaded ? {} : { display: 'none' }}
              onLoad={() => this.setState({ loaded: true })}
              alt={alt_description} 
            />

            <div className="middle" style={{ height: `calc(100% - ${this.state.imgDetailHeight}px)` }}>
              <Button className='save-btn'>Save</Button>
              <footer>
                <a target='_blank' href={this.props.image.links.self}>
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

          <div id='image-detail'>
            {alt_description && alt_description.length > 50 &&
              <strong>
                {alt_description.charAt(0).toUpperCase() + alt_description.slice(1)}
              </strong>
            }

            {likes > 80 && 
              <span className='reactions'>
                <FontAwesomeIcon icon={faHeart} /> {likes}
              </span>
            }
          </div>
        </div>

        <Modal 
          fade={false} 
          isOpen={modal} 
          toggle={this.toggle} 
          className={this.props.className}
        >
         <Nav />
          <ModalHeader style={styles}>
            <Button color="secondary" className="btn_back" onClick={this.toggle}>
              <FontAwesomeIcon className="iconArrow" icon="arrow-left" /> For you
            </Button>
          </ModalHeader>

          <ModalBody>
            <section className="container">
              <div id="fl" className="left-half">
                <article>
                  <img className="imgmodal" style={{ width: '100%', height: '100%' }} src={this.props.image.urls.full} alt='img' />
                </article>
              </div>
              <div id="fl" className="img-detail right-half">
                <section className="img-detail-header">
                  <nav className='img-detail-header__actions'>
                    <div className="left">
                      <Button>
                        <FontAwesomeIcon className="ellip_color" icon="ellipsis-h" />
                      </Button>

                      <Button>
                        <img width='20' src='https://image.flaticon.com/icons/svg/725/725008.svg' />
                      </Button>
                    </div>

                    <div className="right">
                      <Button>Save</Button>
                    </div>
                  </nav>

                  <article className='img-detail-header__website'>
                    <a target='_blank' href={this.props.image.links.self}>{urlModal[0]}</a>
                  </article>
                </section>

                <section className="img-detail-headline">
                  <h1>{this.props.image.alt_description}</h1>
                </section>

                <section className="img-detail-user">
                  <div className="left">
                    <img src={this.props.image.user.profile_image.small} alt='user' />
                    
                    <span className='user-description'>
                      <a target='_blank' href={this.props.image.user.links.self}>
                        <strong>
                          {this.props.image.user.username}
                        </strong>
                      </a>

                      <small>{this.props.image.user.total_likes} total likes</small>
                    </span>
                  </div>

                  <div className='right'>
                    <Button>Follow</Button>
                  </div>
                </section> 

                <div id='parent2' className="parent">
                  <div className="left _l">
                    <p className="p_comment">Comentarios</p>
                  </div>
                  <div className="right comm">
                    <Button color="secondary" className="btn_arrow-comment">
                      <FontAwesomeIcon className="arrow_icon-comment" icon="angle-down" />
                    </Button>
                  </div>      
                </div>   
              </div>
            </section>
          </ModalBody>

          <section className='more-images'>
            <h2>More like this</h2>

            <ImageList searchQuery={{ event: { target: { value: alt_description }}}} />
          </section>
        </Modal>
      </Fragment>
    );
  }
}

export default ImgModal;