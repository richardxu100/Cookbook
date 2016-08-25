import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import store from '../RecipeStore';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';
import '../styles/style.sass';

@inject("store") @observer
export default class MainLayout extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    return (
      <div>
        <AppBar
          title={<Link to="/">CookBook</Link>}
          iconElementRight={<FlatButton label={<Link to="/login">Login</Link>} />} />
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}
