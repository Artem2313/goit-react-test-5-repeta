import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ number, items }) => {
  return (
    <p>
      {number + 1}/{items}
    </p>
  );
};

Progress.propTypes = {
  number: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
};

export default Progress;
