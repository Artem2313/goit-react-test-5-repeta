/* eslint-disable */
import React, { Component } from 'react';
import ArticleList from './ArticleList/ArticleList';
import Loader from './Loader/Loader';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import SearchForm from './SearchForm/SearchForm';
import CategorySelelctor from './SeacrhBox/CategorySelelctor';
import * as ArticleApi from '../services/ArticleApi';
import withFetch from './hoc/withFetch';
import Togglable from './hoc/Togglable';
import Fetcher from './hoc/Fetcher';

const mapper = articles => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
};

export default class App extends Component {
  render() {
    // const { data, isLoading, error } = this.props;
    return (
      <div>
        <Fetcher url="https://hn.algolia.com/api/v1/search?query=react">
          {(data, isLoading, error) => {
            
            <>
              {error && <ErrorNotification text={error.message} />}
              {isLoading && <Loader />}
              {article.length > 0 && (
                <Togglable>
                  {({ isOpen, onToggle }) => {
                    let articles = [];
                    if (data.hits) {
                      articles = mapper(data.hits);
                    }
                    return (
                      <>
                        <button type="button" onClick={onToggle}>
                          {isOpen ? 'Hide' : 'Show'}
                        </button>
                        {isOpen && <ArticleList items={articles} />}
                      </>
                    );
                  }}
                </Togglable>
              )}
            </>
  }}
        </Fetcher>
      </div>
    );
  }
}

// export default withFetch('https://hn.algolia.com/api/v1/search?query=react')(
//   App,
// );
