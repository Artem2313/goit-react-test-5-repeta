import React, { Component } from 'react';
import Articlelist from '../components/ArticleList/Articlelist';
import * as articleAPI from '../services/ArticleApi';

export default class Articles extends Component {
  state = { items: [] };

  componentDidMount() {
    articleAPI.fetchArticles().then(items => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Articles Page</h1>
        <Articlelist items={items} />
      </div>
    );
  }
}
