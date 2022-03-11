import React, { Component, Fragment } from  'react';
import axios from 'axios';
import ImgModal from './Modal';
import Nav from './Nav';
import Buttons from './Buttons';
import Loader from './Loader';
import './img.scss';
import FooterButtons from './FooterButtons';
import ImageList from './ImageList/ImageList';

const API = 'https://api.unsplash.com';
const CLIENT_ID = 'glba6OWFPGpudfEQYbGP23EDLLJsIAF9v2tZM82kfHs';
const DEFAULT_IMAGE_COUNT = 30;
const IMAGE_INCREMENT_COUNT = 20;

const modes = {
  SEARCH: 'search_query',
  RANDOM: 'get_random'
}
class Imagenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      searchInput: '',
      images: [],
      imgsPerPage: DEFAULT_IMAGE_COUNT,
      mode: modes['RANDOM'],
      isLoading: false,
    };

    this.toggle = this.toggle.bind(this);
    this.onChangeInputSearch = this.onChangeInputSearch.bind(this);

  }

  toggle() {
    this.setState({ modal: !this.state.modal, });
  }

  componentDidMount() {    
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.randomImages();
  }

  handleScroll = () => {
    if ((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
      this.setState({ imgsPerPage: this.state.imgsPerPage + IMAGE_INCREMENT_COUNT }, () => {
        switch(this.state.mode) {
          case modes['RANDOM']:
            this.randomImages();
            break;
           case modes['SEARCH']:
            this.searchByQuery(); 
            break;
        }
      })
    }
  }

  navigateToHome = () => {
    this.setState({ mode: modes['RANDOM'] });
  }

  randomImages = async () => {
    this.setState({ isLoading: true, mode: modes['RANDOM'] });

    axios(`${API}/photos/random`, {
      params: {
        count: this.state.imgsPerPage,
        client_id: CLIENT_ID,
      },
    })
      .then((res) => {
      this.setState((prevState) => ({ 
        images: [...prevState.images, ...res.data], 
        isLoading: false 
      }));
    })
      .catch((error) => {
        console.error("Ocurrió un error", error)
      });
  }

  printImages() {
    return this.state.images.map((imgs, i) => {
      return (
        <ImgModal 
          key={i}
          index={i}
          image={imgs}
          click={this.state.images.imgs} 
          isOpen={this.state.modal} 
          toggle={this.toggle} 
          loading={this.state.isLoading}
        />
      );
    });
  }

  onChangeInputSearch(event) {
    if (event.key === 'Enter') {
      this.setState({ 
        images: [], 
        mode: 'search_query',
        searchInput: event.target.value, 
        imgsPerPage: 20, }, () => {
          this.searchByQuery();
        });
    };
  }

  selectedCategory = (category) => {
    this.setState({ 
      images: [],  
      imgsPerPage: 20, 
      mode: 'search_query',
      searchInput: category }, () => this.searchByQuery());
  }

  searchByQuery = () => {
    axios(`${API}/search/photos/`, {
      params: {
        query: this.state.searchInput,
        count: this.state.imgsPerPage,
        client_id: CLIENT_ID,
      },
    })
      .then((res) => {
      this.setState((prevState) => ({ 
        images: [...prevState.images, ...res.data.results], 
        isLoading: false 
      }));
    })
      .catch((error) => {
        console.error("Ocurrió un error", error)
      });
  }

  render() {
    return (
      <Fragment>
        <Nav 
          enter={key => this.onChangeInputSearch(key)} 
          goHome={this.navigateToHome}
        />
        
        {this.state.mode === modes['SEARCH'] &&
          <Buttons 
            onSearchCategory={this.selectedCategory} 
            colors={this.state.images.map(({ color }) => color)} 
          />
        }
        
        <ImageList />

        <FooterButtons />
      </Fragment>
    )
  }
}


export default Imagenes;