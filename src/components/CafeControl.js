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

  handleClick = () => {
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewDrinkForm />
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <Menu />
      buttonText = "Add Drink"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}