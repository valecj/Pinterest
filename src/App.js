import React, { Component } from 'react';
import Example from '../src/Componentes/Nav'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Example />
      </div>
    );
  }
}

library.add(faEllipsisH)
library.add(faBell)
library.add(faCommentDots)
library.add(faSearch)
export default App;
