import React from 'react';
import { v4 } from 'uuid';

function NewDrinkForm() {
  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
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

export default NewDrinkForm;