import React from 'react';
import PropTypes from 'prop-types';

function Drink(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDrinkClicked(props.id)}>
        <h4>{props.name}</h4>
        <h6>{props.description}</h6>
        <h6>{props.quantity}</h6>
      </div>
    </React.Fragment>
  )
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
}

export default Drink;