import React from 'react';
import NewDrinkForm from './NewDrinkForm';
import Menu from './Menu';
import DrinkDetail from './DrinkDetail';
import EditDrinkForm from './EditDrinkForm';

class CafeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMenu: [],
      selectedDrink: null,
      editing: false
    };
  }

  handleAddingNewDrinkToMenu = (newDrink) => {
    const newMasterMenu = this.state.masterMenu.concat(newDrink);
    this.setState({masterMenu: newMasterMenu, formVisibleOnPage:false });
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
  }

  handleChangingSelectedDrink = (id) => {
    const selectedDrink = this.state.masterMenu.filter(drink => drink.id === id)[0];
    this.setState({selectedDrink: selectedDrink});
  }

  handleDeletingDrink = (id) => {
    const newMasterMenu = this.state.masterMenu.filter(drink => drink.id !== id);
    this.setState({
      masterMenu: newMasterMenu,
      selectedDrink: null
    });
  }

  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  handleEditingDrinkInMenu = (drinkToEdit) => {
    const editedMasterMenu = this.state.masterMenu
      .filter(drink => drink.id !== this.state.selectedDrink.id)
      .concat(drinkToEdit);
    this.setState({
      masterMenu: editedMasterMenu,
      editing: false,
      selectedDrink: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditDrinkForm 
        drink = {this.state.selectedDrink} 
        onEditDrink = {this.handleEditingDrinkInMenu} />
      buttonText = "Return to Menu";
    }
    else if(this.state.selectedDrink !== null) {
      currentlyVisibleState = <DrinkDetail
        drink = {this.state.selectedDrink}
        onClickingDelete = {this.handleDeletingDrink}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Menu";
    }
    else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation = {this.handleAddingNewDrinkToMenu}/>;
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <Menu menu = {this.state.masterMenu} onDrinkSelection = {this.handleChangingSelectedDrink} />;
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