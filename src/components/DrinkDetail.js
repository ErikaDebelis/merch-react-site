import React from 'react';
import PropTypes from "prop-types";
import Drink from './Drink';
import Button from 'react-bootstrap/Button';

function DrinkDetail(props) {
  const { drink, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Drink Detail</h1>
      <h4>Drink Name: {drink.name}</h4>
      <h4>Drink Description: {drink.description}</h4>
      <h4>Quantity: {drink.quantity}</h4>
      <Button variant="outline-warning" size="sm" onClick = {props.onClickingEdit}>Update Drink</Button>
      <Button variant="outline-danger" size="sm" onClick = {() => props.onClickingDelete(drink.id) }>Remove Drink</Button>
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