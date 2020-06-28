import PropTypes from 'prop-types';
import React from 'react';
import Overlay from '../Overlay';
import Spinner from '../Spinner';

const propTypes = {
  active: PropTypes.bool,
};

const defaultProps = {
  active: false,
};

function BusyIndicator({ active }) {
  if (!active) {
    return null;
  }
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
}

BusyIndicator.propTypes = propTypes;
BusyIndicator.defaultProps = defaultProps;
export default BusyIndicator;
