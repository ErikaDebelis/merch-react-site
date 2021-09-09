import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReuseableForm from "./ReusableForm";

function NewDrinkForm(props) {
  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({
      name: event.target.name.value, 
      description: event.target.description.value, 
      quantity: event.target.quantity.value, 
      id: v4()
    });
    console.log('whats in here?', event.target.quantity.value);
  }
  return (
    <React.Fragment>
      <ReuseableForm
        formSubmissionHandler={handleNewDrinkFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
};

export default NewDrinkForm;