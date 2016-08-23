import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer}>
		</Route>
	</Router>
)

export default routes;
