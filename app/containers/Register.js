import React, { Component } from 'react';
import styles from '../styles/styles';
import Paper from 'material-ui/Paper';
import { Form } from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false
    }
  }

  enableButton = () => this.setState({canSubmit: true});
  disableButton = () => this.setState({canSubmit: false});

  handleRegister = () => {
    const name = this._name.state.value;
    const email = this._email.state.value;
    const password = this._password.state.value;
    console.log(name, email, password);
    this.props.userStore.handleRegister(name, email, password);
  }

  render() {
    return (
      <Paper style={styles.loginContainer} zDepth={2}>
        <h2 className="subheader">Register</h2>
        <Form
          onValidSubmit={this.handleRegister}
          onValid={this.enableButton}
          onInvalid={this.disableButton}>
          <FormsyText
            fullWidth={true}
            hintText="Name"
            name="name"
            ref={r => this._name = r} />
          <FormsyText
            fullWidth={true}
            hintText="Email Address"
            name="email"
            validations="isEmail"
            validationError="This is not a valid email"
            required
            ref={r => this._email = r}/>
          <FormsyText
            type="password"
            fullWidth={true}
            hintText="Password"
            name="password"
            required
            ref={r => this._password = r}/>
          <FormsyText
            type="password"
            fullWidth={true}
            hintText="Confirm Password"
            name="confirmPassword"
            validations="equalsField:password"
            validationError="Your passwords do not match"
            required />

          <div style={styles.loginActions}>
            <RaisedButton
              type="submit"
              secondary={true}
              label="Register"
              disabled={!this.state.canSubmit}
              />
            <span style={styles.loginQuestion}>Already have an account?
              <Link to="/login" style={styles.loginLink}> Login</Link>
            </span>
          </div>

        </Form>
      </Paper>
    )
  }
}
