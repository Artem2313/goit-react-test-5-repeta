import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.css';

const Publication = ({ publication: { title, text } }) => {
  return (
    <article>
      <h2 styles={styles}>{title}</h2>
      <p styles={styles}>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
