import PropsTypes from 'prop-types';
import React from 'react';

const Filter = ({ filters }) => {
  filters.map((filter) => (
    <button type="button" key={filter.id}>{filter.label}</button>
  ));
};

Filter.PropsTypes = {
  filters: PropsTypes.arrayOf(PropsTypes.object),
};

Filter.defaultProps = {
  filters: [],
};

export default Filter;
