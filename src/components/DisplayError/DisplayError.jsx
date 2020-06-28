import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './DisplayError.scss';

const defaultProps = {
  className: '',
  error: null,
};

const propTypes = {
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Error)]),
};

function DisplayError(props) {
  const { error, className } = props;

  if (!error) {
    return null;
  }

  const message = typeof error === 'string' ? error : error.message;
  return <div className={classNames('error', className)}>{message}</div>;
}

DisplayError.propTypes = propTypes;
DisplayError.defaultProps = defaultProps;

export default DisplayError;
