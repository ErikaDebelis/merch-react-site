import React from 'react';
import ReusableForm from './ReuseableForm';

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

export default EditDrinkForm;