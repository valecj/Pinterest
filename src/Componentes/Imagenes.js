import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import ImgModal from './Modal';
import Nav from './Nav';
import Buttons from './Buttons';
import Loader from './Loader';
import './img.css';
import { Spinner } from 'reactstrap'


class Imagenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      searchInput: '',
      apikey: '10347633-396ecc5e8f118c4d41d96ecbc',
      url: 'https://pixabay.com/api/',
      images: [],
      imgsPerPage: 40,
      isLoading: false
    };

    this.toggle = this.toggle.bind(this);
    this.onChangeInputSearch = this.onChangeInputSearch.bind(this);

  }

  toggle() {
    this.setState({ modal: !this.state.modal, });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.loadImages();
  }

  handleScroll = () => {
    if ((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
      console.log("at the bottom");
      this.setState({ imgsPerPage: this.state.imgsPerPage + 20 }, () => this.loadImages())
    }
  }

  loadImages = async () => {
    this.setState({ isLoading: true });
    axios.get(`${this.state.url}?key=${this.state.apikey}&q=${this.state.searchInput}&per_page=${this.state.imgsPerPage}&safesearch=true`)
      .then(res => {
        let imgs = res.data.hits.map(res => res)
        this.setState({ images: imgs, isLoading: false });
      })
      .catch(error => {
        console.error(error)
      });
  }

  printImages() {
    return this.state.images.map((imgs, i) => {
      return <div key={i}>
        <ImgModal 
          img={imgs.largeImageURL} 
          click={this.state.images.imgs} 
          isOpen={this.state.modal} 
          toggle={this.toggle} 
        />
      </div>
    });
  }

  onChangeInputSearch(event) {
    if (event.key === 'Enter') {
      this.setState({ searchInput: event.target.value });
      axios.get(`${this.state.url}?key=${this.state.apikey}&q=${this.state.searchInput}&per_page=${this.state.imgsPerPage}`)
        .then(datos => {
          this.setState({ images: datos.data.hits })
        })
        .catch(error =>
          console.error(error)
        )
    };
  }

  render() {
    return (
      <Fragment>
        <div id='scrollable'>
        <Helmet>
          <title>Pinterest (Home)</title>
        </Helmet>
        <Nav enter={key => this.onChangeInputSearch(key)} />
        <Buttons />
        
          <div className="img">
            {this.printImages()}
          </div>
          <div className="bkgr_img" onClick={this.props.toggle}>
            <img className="imgs" src={this.props.img} onClick={() => this.uploadImg2(this.props.img)}></img>
          </div>
          <Loader onLoad={this.state.isLoading} />
        </div>
      </Fragment>
    )
  }
}


export default Imagenes;