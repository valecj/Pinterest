import React from 'react';
//import Imagenes from './componentes/Imagenes';
import { Switch, Route, Link } from "react-router-dom";
import Nav from './componentes/Nav'
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faSearch,
  faCommentDots,
  faBell,
  faEllipsisH,
  faArrowLeft,
  faUpload,
  faAngleDown } from '@fortawesome/free-solid-svg-icons';

const App = (props) => (
  <div className="App">
    <Nav />
    {props.children}
  </div>
)

library.add(faArrowLeft, faEllipsisH, faBell, faCommentDots, faSearch, faUpload, faAngleDown)
export default App;
