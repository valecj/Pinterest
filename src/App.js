import React, { Component } from 'react';
import Example from '../src/Componentes/Nav';
import Imagenes from '../src/Componentes/Imagenes';
import ModalExample from '../src/Componentes/Modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Example />
      <Imagenes />
      </div>
    );
  }
}

library.add(faArrowLeft, faEllipsisH, faBell, faCommentDots, faSearch, faUpload)
export default App;
