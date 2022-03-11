import React from 'react'
import App from './App';
import ImageDetail from './pages/imageDetail';
import ImageList from './pages/imageList';

import { BrowserRouter, Route } from 'react-router-dom';


const Router = () => (
  <BrowserRouter>
    <App>
      <Route path="/" component={ImageList} />
      <Route path="/pin/:id" component={ImageDetail} />
    </App>
  </BrowserRouter>
)

export default Router;