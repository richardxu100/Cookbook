import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import styles from '../styles/styles';

export default class ModalForm extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    id: PropTypes.number
  }

  handleSubmitRecipe = () => {
    const recipeName = this.recipeName.input.value;
    const ingredients = this.ingredients.input.value;
    const imageURL = this.imageURL.input.value;
    console.log(recipeName, ingredients, imageURL);
    if (this.props.id) {
      const { onSubmit, id } = this.props;
      onSubmit(id, recipeName, ingredients, imageURL);
    }
    else {
      this.props.onSubmit(recipeName, ingredients, imageURL);
    }
  }

  render() {
    const { isOpen, toggleOpen } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={toggleOpen}
      />,
      <FlatButton
        label="Edit or Add"
        primary={true}
        onTouchTap={this.handleSubmitRecipe}
      />,
    ];
    return (
      <Dialog
        title={this.props.title}
        actions={actions}
        modal={true}
        open={isOpen}
      >
        <TextField hintText="Recipe Name" ref={r => this.recipeName = r} /> <br />
        <TextField
          style={styles.textField}
          hintText="Ingredients: separated by a comma, for, each, ingredient"
          fullWidth={true}
          ref={r => this.ingredients = r} />
        <TextField
          style={styles.textField}
          hintText="Optional Image URL"
          fullWidth={true}
          ref={r => this.imageURL = r} />
      </Dialog>
    )
  }
}
