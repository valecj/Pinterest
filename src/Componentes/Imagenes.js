import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import ImgModal from './Modal';
import Nav from './Nav';
import Buttons from './Buttons';
import Loader from './Loader';
import './img.css';


class Imagenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      searchInput: '',
      searchCategory: '',
      apikey: '10347633-396ecc5e8f118c4d41d96ecbc',
      url: 'https://pixabay.com/api/',
      images: [],
      imgsPerPage: 20,
      isLoading: false
    };

    this.toggle = this.toggle.bind(this);
    this.onChangeInputSearch = this.onChangeInputSearch.bind(this);

  }

  toggle() {
    this.setState({ modal: !this.state.modal, });
  }

  componentDidMount() {
    console.log("%cProject carried out for challenge number 6 of Silicon Valley / Laboratoria 2018.", 'color: #f5647f;')
    
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.loadImages();
  }

  handleScroll = () => {
    if ((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
      this.setState({ imgsPerPage: this.state.imgsPerPage + 20 }, () => this.loadImages())
    }
  }

  loadImages = async () => {
    this.setState({ isLoading: true });
    axios.get(`${this.state.url}?key=${this.state.apikey}&q=${this.state.searchInput}&per_page=${this.state.imgsPerPage}&safesearch=true&orientation=verical&min_height=10000&category=${this.state.searchCategory}`)
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
      return (
        <ImgModal 
          key={i}
          img={imgs.largeImageURL} 
          url={imgs.pageURL}
          click={this.state.images.imgs} 
          isOpen={this.state.modal} 
          toggle={this.toggle} 
        />
      );
    });
  }

  onChangeInputSearch(event) {
    if (event.key === 'Enter') {
      this.setState({ 
        images: [], 
        searchInput: event.target.value, 
        searchCategory: '', 
        imgsPerPage: 20, }, () => this.loadImages());
    };
  }

  selectedCategory = (category) => {
    this.setState({ 
      images: [], 
      searchInput: '', 
      imgsPerPage: 20, 
      searchCategory: category }, () => this.loadImages());
  }



  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Pinterest (Home)</title>
        </Helmet>
        <Nav  enter={key => this.onChangeInputSearch(key)} />
        <Buttons onSearchCategory={this.selectedCategory} />
        
        <div className="img">
          {this.printImages()}
        </div>
        <Loader onLoad={this.state.isLoading} />
      </Fragment>
    )
  }
}


export default Imagenes;