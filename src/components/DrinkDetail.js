import React from 'react';
import PropTypes from "prop-types";
import Drink from './Drink';

function DrinkDetail(props) {
  const { drink } = props;

  return(
    <React.Fragment>
      <h1>Drink Detail</h1>
      <h4>drink.name</h4>
      <h4>drink.description</h4>
      <h4>drink.quantity</h4>
      <hr/>
    </React.Fragment>
  );
}

DrinkDetail.PropTypes = {
  drink: PropTypes.object
};

export default DrinkDetail;