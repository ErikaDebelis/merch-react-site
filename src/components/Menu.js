import React from 'react';
import Drink from './Drink';
import PropTypes from 'prop-types';

function Menu(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.menu.map((drink) =>
      <Drink
        whenDrinkClicked = { props.onDrinkSelection }
        name = {drink.name}
        description = {drink.description}
        quantity = {drink.quantity} 
        id = {drink.id}
        key = {drink.id}/>
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  menu: PropTypes.array,
  onDrinkSelection:PropTypes.func
};

export default Menu;