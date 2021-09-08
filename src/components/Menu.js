import React from 'react';
import Drink from './Drink';
import PropTypes from 'prop-types';

function Menu(props) {
  return (
    <React.Fragment>
      {props.menu.map((drink, index) =>
      <Drink
        name={drink.name}
        description={drink.description}
        quantity={drink.quantity} 
        key={index}/>
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  menu: PropTypes.array
}

export default Menu;