import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import styles from '../styles/styles';

export default class ModalForm extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    toggleEditOpen: PropTypes.func
  }

  render() {
    const { isOpen, toggleEditOpen } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={toggleEditOpen}
      />,
      <FlatButton
        label="Edit or Add"
        primary={true}
        onTouchTap={toggleEditOpen}
      />,
    ];
    return (
      <Dialog
        title={this.props.title}
        actions={actions}
        modal={true}
        open={isOpen}
      >
        <TextField hintText="Recipe Name" /> <br />
        <TextField style={styles.textField} hintText="Ingredients: separated by a comma, for, each, ingredient" fullWidth={true} />
        <TextField style={styles.textField} hintText="Optional Image Link" fullWidth={true} />
      </Dialog>
    )
  }
}
