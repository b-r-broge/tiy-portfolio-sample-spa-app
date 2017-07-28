import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/normalize.css'; 
import './styles/index.css';

// import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/About" component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );
