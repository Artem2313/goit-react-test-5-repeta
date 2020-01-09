import React from 'react';

const SeacrhBox = ({ value, onChange, onSeacrh }) => (
  <div>
    <input type="text" value={value} onChange={onChange} />
    <button type="button" onClick={onSeacrh}>
      Search
    </button>
  </div>
);

export default SeacrhBox;
