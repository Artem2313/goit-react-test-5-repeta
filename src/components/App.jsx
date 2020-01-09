import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList';
import Loader from './Loader/Loader';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import SearchForm from './SearchForm/SearchForm';
import CategorySelelctor from './SeacrhBox/CategorySelelctor';
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
    category: '',
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.state;
    if (prevState.category !== category) {
      this.fetchArticles(category);
    }
  }

  fetchArticles = querry => {
    this.setState({ isLoading: true });
    ArticleApi.fetchArticles(querry)
      .then(({ data }) => {
        this.setState({ articles: mapper(data.hits) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { articles, isLoading, error, category } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.fetchArticles} />
        <CategorySelelctor
          options={['html', 'css', 'javascript']}
          value={category}
          onChange={this.handleCategoryChange}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
    );
  }
}
