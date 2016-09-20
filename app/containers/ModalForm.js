import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Form } from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
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
        imageURL: props.imageURL,
        canSubmit: false
      }
    } else this.state = { canSubmit: false }
  }

  enableButton = () => this.setState({canSubmit: true});
  disableButton = () => this.setState({canSubmit: false});

  handleNameChange = (e) => this.setState({name: e.target.value});
  handleIngredientsChange = (e) => this.setState({ingredients: e.target.value});
  handleImageURLChange = (e) => this.setState({imageURL: e.target.value})

  handleSubmitRecipe = () => {
    const recipeName = this._recipeName.state.value;
    const ingredients = this._ingredients.state.value;
    const imageURL = this._imageURL.state.value;
    if (this.props.id) {
      const { onSubmit, id } = this.props;
      onSubmit(id, recipeName, ingredients, imageURL);
    }
    else this.props.onSubmit(recipeName, ingredients, imageURL);
  }

  render() {
    const { isOpen, toggleOpen, id } = this.props;
    const { name, ingredients, imageURL } = this.state;
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={toggleOpen.bind(this, id)} />,
      <FlatButton
        type="submit"
        label={this.props.id ? 'Edit' : 'Add'}
        primary={true}
        onTouchTap={this.handleSubmitRecipe.bind(this, id)}
        disabled={!this.state.canSubmit} />
    ];
    return (
      <Dialog
        title={this.props.title}
        actions={actions}
        modal={true}
        open={isOpen}>
        <Form
          onValidSubmit={this.handleSubmitRecipe.bind(this, id)}
          onValid={this.enableButton}
          onInvalid={this.disableButton}>
          <FormsyText
            required
            name="recipeName"
            hintText="Recipe Name"
            ref={r => this._recipeName = r}
            value = {id ? this.state.name : undefined}
            onChange = {id ? this.handleNameChange : undefined} /> <br />
          <FormsyText
            required
            name="ingredients"
            style={styles.textField}
            hintText="Ingredients: separated by a comma, for, each, ingredient"
            fullWidth={true}
            ref={r => this._ingredients = r}
            value={id ? this.state.ingredients : undefined}
            onChange={id ? this.handleIngredientsChange : undefined} />
          <FormsyText
            name="imageURL"
            style={styles.textField}
            hintText="Optional Image URL"
            fullWidth={true}
            ref={r => this._imageURL = r}
            value={id ? this.state.imageURL : undefined}
            onChange={id ? this.handleImageURLChange : undefined} />
            <input type="submit" style={{display: 'none'}} />
          </Form>
        </Dialog>
    )
  }
}
