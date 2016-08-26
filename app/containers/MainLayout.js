import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import recipeStore from '../stores/RecipeStore';
import userStore from '../stores/UserStore';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';
import '../styles/style.sass';

@inject('recipeStore', 'userStore') @observer
export default class MainLayout extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    const { currentUser, signOut } = this.props.userStore;
    return (
      <div>
        <AppBar
          title={<Link to="/">CookBook</Link>}
          iconElementRight={currentUser ?
            <FlatButton label="sign-out" onClick={signOut} /> :
            <FlatButton label={<Link to="/login">Login</Link>} />
          } />
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}
