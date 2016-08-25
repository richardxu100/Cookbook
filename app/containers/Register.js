import React, { Component } from 'react';
import styles from '../styles/styles';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Register extends Component {
  render() {
    return (
      <Paper style={styles.loginContainer} zDepth={2}>
        <h2 className="subheader">Register</h2>
        <TextField fullWidth={true} hintText="Name" />
        <TextField fullWidth={true} hintText="Email Address" />
        <TextField type="password" fullWidth={true} hintText="Password" />
        <TextField type="password" fullWidth={true} hintText="Confirm Password" />
        <div style={styles.loginActions}>
          <RaisedButton secondary={true} label="Register" />
          <span style={styles.loginQuestion}>Already have an account?
            <Link to="/login" style={styles.loginLink}> Login</Link>
          </span>
        </div>
      </Paper>
    )
  }
}
