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
      <form onSubmit={handleNewDrinkFormSubmission}>
      <input
        type="text"
        name="name"
        placeholder="Name" />
      <input
        type="text"
        name="description"
        placeholder="Description" />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity" />
      </form>
    </React.Fragment>
  );
}

NewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
};

export default NewDrinkForm;