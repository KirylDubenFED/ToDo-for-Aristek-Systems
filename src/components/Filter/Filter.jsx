import PropsTypes from 'prop-types';
import React from 'react';

const Filter = ({ filters }) => (
  filters.map((filter) => (
    <button type="button" key={filter.id}>{filter.label}</button>
  ))
);

Filter.propTypes = {
  fruits: PropsTypes.arrayOf(PropsTypes.object),
};

Filter.defaultProps = {
  fruits: [],
};

export default Filter;
