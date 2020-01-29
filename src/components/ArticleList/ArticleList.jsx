import React from 'react';
import PropTypes from 'prop-types';
import withLog from '../hoc/withLog';
import ArticleListItem from './ArticleListItem';
import Togglable from '../hoc/Togglable';

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ id, link, title }) => (
      <li key={id}>
        <Togglable>
          {({ isOpen, onToggle }) => (
            <div>
              <button type="button" onClick={onToggle}>
                {isOpen ? 'Hide' : 'Show'}
              </button>
              {isOpen && <ArticleListItem title={title} link={link} />}
            </div>
          )}
        </Togglable>
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withLog(ArticleList);
