import React from 'react';
import PropTypes from 'prop-types';
import './Overlay.scss';

function Overlay({ children }) {
  return <div className="overlay-container">{children}</div>;
}

Overlay.defaultProps = {
  children: [],
};
Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Overlay;
