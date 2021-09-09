import React from 'react';
import ReusableForm from './ReuseableForm';

function EditDrinkForm (props) {
  return (
    <React.Fragment>
      <ReusableForm
      buttonText = "Update Drink" />
    </React.Fragment>
  );
}

export default EditDrinkForm;