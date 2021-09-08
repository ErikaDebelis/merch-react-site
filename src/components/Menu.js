import React from 'react';
import Drink from './Drink';

function Menu() {
  return (
    <React.Fragment>
      {props.Menu.map((drink) =>
      <Drink
        name={drink.name}
        description={drink.description}
        quantity={drink.quantity} />
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  menu = PropTypes.array
}

export default Menu;