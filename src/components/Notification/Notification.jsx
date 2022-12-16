import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <div className={css.message}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
