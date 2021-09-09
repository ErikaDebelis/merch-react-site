import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Drink Name' />
        <input
          type = 'text'
          name = 'description'
          placeholder = 'Description' />
        <input
          type = 'text'
          name = 'quantity'
          placeholder = 'quantity' />
        <button type = 'submit'> {props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;