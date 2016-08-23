import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';

export default class MainLayout extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    return (
      <div>
        <AppBar title="CookBook" />
        {this.props.children}
      </div>
    )
  }
}
