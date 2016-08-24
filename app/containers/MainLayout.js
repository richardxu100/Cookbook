import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import store from '../RecipeStore';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export default class MainLayout extends Component {
  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    console.log('store is: ', store);
    return (
      <div>
        <AppBar title="CookBook" />
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}
