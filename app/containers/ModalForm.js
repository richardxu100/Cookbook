import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import styles from '../styles/styles';

export default class ModalForm extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
    ingredients: PropTypes.object,
    imageURL: PropTypes.string
  }

  constructor(props) {
    super(props);
    if (props.id) { // only add internal state if there's an id, which means this is an edit modal. Allows us to change the inputs in the form
      this.state = {
        name: props.name,
        ingredients: props.ingredients.join(', '),
        imageURL: props.imageURL
      }
    }
  }

  handleNameChange = (e) => this.setState({name: e.target.value});
  handleIngredientsChange = (e) => this.setState({ingredients: e.target.value});
  handleImageURLChange = (e) => this.setState({imageURL: e.target.value})

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
    const { isOpen, toggleOpen, id } = this.props;
    if (this.props.id) {
      const { name, ingredients, imageURL } = this.state;
    }
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={toggleOpen.bind(this, id)}
      />,
      <FlatButton
        label={this.props.id ? 'Edit' : 'Add'}
        primary={true}
        onTouchTap={this.handleSubmitRecipe.bind(this, id)}
      />,
    ];
    return (
      <Dialog
        title={this.props.title}
        actions={actions}
        modal={true}
        open={isOpen}>
        { this.props.id ?
          <TextField
            hintText="Recipe Name"
            value={this.state.name}
            ref={r => this.recipeName = r}
            onChange={this.handleNameChange} /> :
          <TextField
            hintText="Recipe Name"
            ref={r => this.recipeName = r} />
          }
            <br />
        { this.props.id ?
          <TextField
            style={styles.textField}
            hintText="Ingredients: separated by a comma, for, each, ingredient"
            fullWidth={true}
            value={this.state.ingredients}
            ref={r => this.ingredients = r}
            onChange={this.handleIngredientsChange} /> :
          <TextField
            style={styles.textField}
            ref={r => this.ingredients = r}
            hintText="Ingredients: separated by a comma, for, each, ingredient"
            fullWidth={true} />
          }
        { this.props.id ?
          <TextField
            style={styles.textField}
            hintText="Optional Image URL"
            fullWidth={true}
            value={this.state.imageURL}
            ref={r => this.imageURL = r}
            onChange={this.handleImageURLChange} /> :
          <TextField
            style={styles.textField}
            hintText="Optional Image URL"
            fullWidth={true}
            ref={r => this.imageURL = r} />
          }
      </Dialog>
    )
  }
}
