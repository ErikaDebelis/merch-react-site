import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditDrinkForm (props) {
  const { drink } = props;

  function handleEditDrinkFormSubmission(event) {
    event.preventDefault();
    props.onEditDrink({
      names: event.target.name.value, 
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: drink.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleEditDrinkFormSubmission}
      buttonText = "Update Drink" />
    </React.Fragment>
  );
}

EditDrinkForm.propTypes = {
  drink: PropTypes.object,
  onEditDrink: PropTypes.func
}

export default EditDrinkForm;