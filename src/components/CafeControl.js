import React from 'react';
import NewDrinkForm from './NewDrinkForm';
import Menu from './Menu';

class CafeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMenu: []
    };
  }

  handleAddingNewDrinkToMenu = (newDrink) => {
    const newMasterMenu = this.state.masterMenu.concat(newDrink);
    this.setState({masterMenu: newMasterMenu, formVisibleOnPage:false });
  }

  handleClick = () => {
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToMenu}/>;
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <Menu menu={this.state.masterMenu}/>;
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

export default CafeControl;