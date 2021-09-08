import React from 'react';
import PropTypes from 'prop-types';

function Drink(props) {
  return (
    <React.Fragment>
    <h4>{props.name}</h4>
    <h6>{props.description}</h6>
    <h6>{props.quantity}</h6>
    </React.Fragment>
  )
}

Drink.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
}