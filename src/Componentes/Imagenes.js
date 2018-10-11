import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './img.css';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Img from 'react-image';
import ModalBodys from './Modal';
import ImgModal from './Modal';

class Imagenes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            searchInput: '',
            apikey: '10347633-396ecc5e8f118c4d41d96ecbc',
            url: 'https://pixabay.com/api/',
            images: [],
            imgsPerPage: 20,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal, 
        });
      }

    componentDidMount() {
        axios.get(`${this.state.url}?key=${this.state.apikey}&q=${this.state.searchInput}&per_page=${this.state.imgsPerPage}`)
          .then(res => {
            let imgs = res.data.hits.map(res => res)
            console.log(imgs)
            this.setState({
              images: imgs
            });
          }).catch(error => {console.error(error)});
        }

        printImages() {
            return this.state.images.map((imgs, i) => {
                return <div key={i}>
                <ImgModal img={imgs.largeImageURL} click={this.state.images.imgs} isOpen={this.state.modal} toggle={this.toggle} />
                </div>
            });
        }

    render() {
        console.log(this.state.images)
        return (
            <div>
            {this.printImages()}
            </div>
        )
    }
}


export default Imagenes;