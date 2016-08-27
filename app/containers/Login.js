import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';
import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Login extends Component {
  constructor(props, context) {
    super(props);
    context.router;
    this.state = {
      canSubmit: false
    }
  }

  enableButton = () => this.setState({canSubmit: true});
  disableButton = () => this.setState({canSubmit: false});

  handleLogin = (e) => {
    e.preventDefault(); // make sure to preventDefault on form submits
    const email = this._email.state.value;
    const password = this._password.state.value;
    console.log(email, password);
    this.context.router.push('/');
    this.props.userStore.handleLogin(email, password);
  }

  render() {
    return (
      <Paper style={styles.loginContainer} zDepth={2}>
        <h2 className="subheader">Login to Your Cookbook</h2>
        <Form
          onValidSubmit={this.handleLogin}
          onValid={this.enableButton}
          onInvalid={this.disableButton}>
          <FormsyText
            fullWidth={true}
            hintText="Email Address"
            required
            validations="isEmail"
            validationError="This is not a valid email"
            name="email"
            ref={r => this._email = r} />
          <FormsyText
            type="password"
            fullWidth={true}
            hintText="Password"
            required
            name="password"
            ref={r => this._password = r} />
          <div style={styles.loginActions}>
            <RaisedButton
              type="submit"
              secondary={true}
              label={<Link to="/">Login</Link>}
              onClick={this.handleLogin}
              // disabled={!this.state.canSubmit} />
              />
            <span style={styles.loginQuestion}>Need an account?
              <Link to="/register" style={styles.loginLink}> Register</Link>
            </span>
          </div>
        </Form>
      </Paper>
    )
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}
