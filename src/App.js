import React, { Component } from 'react';
import Imagenes from '../src/Componentes/Imagenes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faSearch,
  faCommentDots,
  faBell,
  faEllipsisH,
  faArrowLeft,
  faUpload,
  faAngleDown } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Imagenes />
      </div>
    );
  }
}

library.add(faArrowLeft, faEllipsisH, faBell, faCommentDots, faSearch, faUpload, faAngleDown)
export default App;
