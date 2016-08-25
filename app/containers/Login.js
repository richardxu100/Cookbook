import React, { Component } from 'react';
import styles from '../styles/styles';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Login extends Component {
  render() {
    return (
      <Paper style={styles.loginContainer} zDepth={2}>
        <h2 className="subheader">Login</h2>
        <TextField fullWidth={true} hintText="Email Address" />
        <TextField type="password" fullWidth={true} hintText="Password" />
        <div style={styles.loginActions}>
          <RaisedButton secondary={true} label="Login" />
          <span style={styles.loginQuestion}>Need an account?
            <Link to="/register" style={styles.loginLink}> Register</Link>
          </span>
        </div>
      </Paper>
    )
  }
}
