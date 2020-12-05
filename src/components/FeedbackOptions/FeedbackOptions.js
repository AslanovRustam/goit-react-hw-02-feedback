import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

// const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => (
//   <div>
//     <button className={s.button} type="button" onClick={onClickGood}>
//       good
//     </button>
//     <button className={s.button} type="button" onClick={onClickNeutral}>
//       neutral
//     </button>
//     <button className={s.button} type="button" onClick={onClickBad}>
//       bad
//     </button>
//   </div>
// );
function FeedbackOptions({ options, onLeaveFeedback, getNameOfItem }) {
  const namesOfItems = Object.keys(options);

  return (
    <ul className={s.list}>
      {namesOfItems.map(item => (
        <li key={item}>
          <button onClick={() => onLeaveFeedback(item)} className={s.button}>
            {getNameOfItem(item)}{' '}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  getNameOfItem: PropTypes.func.isRequired,
};

export default FeedbackOptions;
