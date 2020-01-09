import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList';
import Loader from './Loader/Loader';
import ErrorNotification from './ErrorNotification/ErrorNotification';
// import SearchForm from './SearchForm/SearchForm';
import SeacrhBox from './SeacrhBox/SeacrhBox';
import * as ArticleApi from '../services/ArticleApi';

const mapper = articles => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
};

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    querry: '',
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    this.setState({ isLoading: true });
    ArticleApi.fetchArticles(this.state.querry)
      .then(({ data }) => {
        this.setState({ articles: mapper(data.hits) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  hadleQuerryChange = e => {
    this.setState({ querry: e.target.value });
  };

  render() {
    const { articles, isLoading, error, querry } = this.state;
    return (
      <div>
        <SeacrhBox
          value={querry}
          onChange={this.hadleQuerryChange}
          onSeacrh={this.fetchArticles}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
    );
  }
}
