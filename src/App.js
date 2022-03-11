import React from 'react';
import { Nav } from './componentes'
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faSearch,
  faCommentDots,
  faBell,
  faEllipsisH,
  faArrowLeft,
  faUpload,
  faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './styles/styles.scss'

const App = (props) => (
  <div className="App">
    <Nav />
    {props.children}
  </div>
)

library.add(faArrowLeft, faEllipsisH, faBell, faCommentDots, faSearch, faUpload, faAngleDown)
export default App;
