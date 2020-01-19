import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Articles from '../pages/Articles';
import NotFound from '../pages/NotFound';
import Nav from './Nav.jsx/Nav';
import ArticlePage from '../pages/ArticlePage';

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 'padding: 0 16px',
};

const App = () => {
  return (
    <div style={containerStyles}>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
