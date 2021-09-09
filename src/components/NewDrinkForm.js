import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReuseableForm from "./ReuseableForm";

function NewDrinkForm(props) {
  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({
      name: event.target.name.value, 
      description: event.target.description.value, 
      quantity: event.target.quantity.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReuseableForm
        formSubmissionHandler={handleNewDrinkFormSubmission}
        buttonText="Help" />
    </React.Fragment>
  );
}

NewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
};

export default NewDrinkForm;