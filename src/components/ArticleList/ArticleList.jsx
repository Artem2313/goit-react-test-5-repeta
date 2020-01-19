import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ items = [] }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link to={`/articles/${item.id}`}>{item.title}</Link>
      </li>
    ))}
  </ul>
);

export default ArticleList;
