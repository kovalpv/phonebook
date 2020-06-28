import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const defaultProps = {
  className: '',
  selected: false,
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
  selected: PropTypes.bool,
};

function ListItem(props) {
  const { className, selected, children } = props;
  return (
    <li
      className={classNames(
        'list-group-item',
        className,
        selected ? 'active' : '',
      )}
    >
      {children}
    </li>
  );
}

ListItem.defaultProps = defaultProps;
ListItem.propTypes = propTypes;

export default ListItem;
