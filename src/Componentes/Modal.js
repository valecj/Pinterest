import React, { Component, Fragment } from  'react';
import { useHistory } from 'react-router-dom';
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
import { Link, Route, Switch } from 'react-router-dom';
import ImageDetail from '../pages/imageDetail';

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

  componentDidMount() {
    this.resizeAllGridItems();
    window.addEventListener("resize", this.resizeAllGridItems);
  }

  resizeGridItem = (item) => {
    if (isNaN(item)) { 
      const grid = document.getElementsByClassName("img")[0];
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      const rowSpan = Math.ceil((item.querySelector('.imgs').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

      item.style.gridRowEnd = "span "+rowSpan;
    }
  }
  
  resizeAllGridItems = () => {
    const allItems = document.getElementsByClassName("bkgr_img");
    
      for (const x in allItems) {
        const element = allItems[x]
        if (element && !isNaN(element) || element && typeof element !== "function") {   
          this.resizeGridItem(allItems[x]);
        } 
      }
  }
  
  resizeInstance = (instance) => {
    const item = instance.elements[0];
    this.resizeGridItem(item);
  }

  render() {
    const { modal, loaded } = this.state;
    const { alt_description, likes, color, height } = this.props.image;

    const url = this.props.image.links.self.replace('https://', '');
    const urlModal = url.split('.com/');

    return (
      <Fragment>
        <div 
          className="bkgr_img" 
          style={{
            minHeight: height / (window.innerWidth/90),
            marginBottom: (alt_description && alt_description.length > 50) && (likes > 80) ? '4em' : (alt_description && alt_description.length > 50) || (likes > 80) ? '3em' : '1em'
          }}
        >
          <Link to={`/pin/${this.props.image.id}`}>
          <div 
            id='img-container' 
            className="imgs" 
            style={{ 
              background: color,
              minHeight: height / (window.innerWidth/90),
              height: '100%'
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
          </Link>

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

        <Switch>
          <Route 
            path={`/pin/${this.props.image.id}`} 
            component={() => <ImageDetail {...this.props.image} />} 
          />
        </Switch>
      </Fragment>
    );
  }
}

export default ImgModal;