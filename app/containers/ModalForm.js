import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import styles from '../styles/styles';

export default class ModalForm extends Component {
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Edit or Add"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <Dialog
        title={this.props.title}
        actions={actions}
        modal={true}
        open={false}
      >
        <TextField hintText="Recipe Name" /> <br />
        <TextField style={styles.textField} hintText="Ingredients: separated by a comma, for, each, ingredient" fullWidth={true} />
        <TextField style={styles.textField} hintText="Optional Image Link" fullWidth={true} />
      </Dialog>
    )
  }
}
