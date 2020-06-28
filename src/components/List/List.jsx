import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const defaultProps = {
  className: '',
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

function List(props) {
  const { className, children } = props;
  return <ul className={classNames('list-group', className)}>{children}</ul>;
}

List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
