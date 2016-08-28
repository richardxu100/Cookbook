import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';
import Paper from 'material-ui/Paper';
import { Form } from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Register extends Component {
  constructor(props, context) {
    super(props);
    context.router; // needed for this.context.router.push
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
    if (this.props.userStore.canRegister(email)) {
      this.props.userStore.handleRegister(name, email, password);
      this.context.router.push({pathname: '/login'});
    }
    else notie.alert('error', 'A user with that email has already signed up', 1.5);
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
           />

          <div style={styles.loginActions}>
            <RaisedButton
              type="submit"
              secondary={true}
              label="Register"
              // disabled={!this.state.canSubmit}
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

Register.contextTypes = {
  router: PropTypes.object.isRequired
}
