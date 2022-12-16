import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.optionList}>
      {options.map(optionName => (
        <li key={optionName}>
          <button
            className={css.btn}
            type="button"
            name={optionName}
            onClick={evt => onLeaveFeedback(evt)}
          >
            {optionName}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
