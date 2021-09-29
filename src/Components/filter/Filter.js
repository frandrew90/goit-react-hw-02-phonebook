import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => {
  return (
    <label>
      Find contacts by name:
      <input name="filter" type="text" value={filter} onChange={onChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
