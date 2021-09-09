import React from 'react';
import PropTypes from "prop-types";
import Drink from './Drink';

function DrinkDetail(props) {
  const { drink, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Drink Detail</h1>
      <h4>{drink.name}</h4>
      <h4>{drink.description}</h4>
      <h4>{drink.quantity}</h4>
      <button onClick = {props.onClickingEdit}>Update Drink</button>
      <button onClick = {() => props.onClickingDelete(drink.id) }>Remove Drink</button>
      <hr/>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default DrinkDetail;