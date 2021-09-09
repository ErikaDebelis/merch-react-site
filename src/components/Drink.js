import React from 'react';
import PropTypes from 'prop-types';

function Drink(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDrinkClicked(props.id)}>
        <h3>{props.description} - {props.name}</h3>
        <p><em>{props.quantity}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Drink.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
}

export default Drink;