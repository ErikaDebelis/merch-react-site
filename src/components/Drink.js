import React from 'react';
import PropTypes from 'prop-types';

function Drink(props) {
  return (
    <React.Fragment>
      <div onClick = { () => props.whenDrinkClicked(props.id)}>
        <h3>{props.name}</h3>
        <h6>{props.description}</h6>
        <h6>{props.quantity}</h6>
      </div>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
};

export default Drink;