import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => (
  <label>
    {' '}
    Find contacts by name
    <br />
    <input type="text" value={filter} onChange={onFilterChange} />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
