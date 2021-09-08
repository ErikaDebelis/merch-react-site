import React from 'react';
import NewDrinkForm from './NewDrinkForm';
import Menu from './Menu';

class CafeControl extends React.Component {

  constructor(prop) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render() {
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewDrinkForm />
    } else {
      currentlyVisibleState = <Menu />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}