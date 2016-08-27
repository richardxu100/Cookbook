import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import recipeStore from '../stores/RecipeStore';
import userStore from '../stores/UserStore';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';
import '../styles/style.sass';
import { browserHistory } from 'react-router';

@inject('recipeStore', 'userStore') @observer
export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { key: Math.random() }; // need this to force a re-render, just change the kye of the component.
  }

  componentWillMount = () => injectTapEventPlugin(); // called before render
  login = () => browserHistory.push('/login'); // some reason can't pass context router weird stuff

  signOut = () => {
    this.props.userStore.signOut();
    this.setState({ key: Math.random() });
  }

  render() {
    const { currentUser, signOut } = this.props.userStore;
    console.log('Value of currentUser as props: ', this.props.userStore.currentUser);
    return (
      <div>
        <AppBar
          title={<Link to="/">CookBook</Link>}
          key={this.state.key}
          iconElementRight={currentUser !== undefined ?
            <FlatButton label="sign-out" onClick={this.signOut} /> :
            <FlatButton label="login" onClick={this.login} />
          } />
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}
